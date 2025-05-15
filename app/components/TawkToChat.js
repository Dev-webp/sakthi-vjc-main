"use client";

import { useState, useEffect } from "react";
import { db } from "@/app/lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubblesOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "@/public/logo.png";

const getHourInLocalTime = () => new Date().getHours();
const isInWorkingHours = () => {
  const hour = getHourInLocalTime();
  return hour >= 10 && hour <= 19;
};
const generateSessionId = () => Math.random().toString(36).substring(2, 15);

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", email: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const chatboxOffset = isMobile ? 90 : 100;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);

    addDoc(collection(db, "messages"), {
      text: "👋 Welcome to VJC Overseas Support! How can we assist you today?",
      sender: "admin",
      sessionId: newSessionId,
      timestamp: serverTimestamp()
    });

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const filtered = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(msg => msg.sessionId === newSessionId);
      setMessages(filtered);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const trimmed = input.trim();
    await addDoc(collection(db, "messages"), {
      text: trimmed,
      sender: "user",
      sessionId,
      timestamp: serverTimestamp()
    });

    if (!isInWorkingHours() && !showForm) {
      await addDoc(collection(db, "messages"), {
        text: "⚠️ We are currently offline (10 AM - 7 PM IST). Please leave your details.",
        sender: "admin",
        sessionId,
        timestamp: serverTimestamp()
      });
      setShowForm(true);
    }

    setInput("");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, contact, email } = formData;
    if (!name || !contact || !email) return alert("Please fill all fields.");

    await addDoc(collection(db, "messages"), {
      text: `📝 Name: ${name}\n📞 Contact: ${contact}\n📧 Email: ${email}`,
      sender: "user",
      sessionId,
      timestamp: serverTimestamp()
    });

    await addDoc(collection(db, "messages"), {
      text: "✅ Thanks! We’ll reach out soon.",
      sender: "admin",
      sessionId,
      timestamp: serverTimestamp()
    });

    setFormSubmitted(true);
    setShowForm(false);
  };

  return (
    <>
      {/* Floating chat icon */}
      <div
        style={{
          position: "fixed",
          bottom: 25,
          left: isMobile ? 10 : 25,
          zIndex: 1000,
          cursor: "pointer",
          backgroundColor: "#2e86de",
          borderRadius: "50%",
          padding: 15,
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <IoChatbubblesOutline size={28} color="#fff" />
      </div>

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: chatboxOffset,
              left: isMobile ? 0 : 25,
              width: isMobile ? "100%" : 420,
              maxHeight: isMobile ? "75vh" : 550,
              background: "#f4f6f9",
              borderRadius: isMobile ? "10px 10px 0 0" : 10,
              boxShadow: "0 0 15px rgba(0,0,0,0.2)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: 10,
              background: "#2e3a59",
              color: "#fff",
              borderRadius: isMobile ? "10px 10px 0 0" : "10px 10px 0 0"
            }}>
              <Image src={logo} alt="VJC Logo" width={30} height={30} style={{ borderRadius: "50%" }} />
              <span>Chat with VJC Support</span>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: 10 }}>
              {messages.map(msg => (
                <div key={msg.id} style={{
                  background: msg.sender === "user" ? "#d1e7dd" : "#e7eaf6",
                  padding: 8,
                  borderRadius: 6,
                  marginBottom: 8,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "90%",
                  fontSize: 14
                }}>
                  <strong>{msg.sender === "user" ? "🧑 You" : "🤖 Admin"}:</strong>
                  <div>{msg.text}</div>
                </div>
              ))}

              {/* Offline Form */}
              {showForm && !formSubmitted && (
                <form onSubmit={handleFormSubmit} style={{ background: "#fef9e7", padding: 10, borderRadius: 6 }}>
                  <input name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} required style={{ width: "100%", marginBottom: 6, padding: 6 }} />
                  <input name="contact" placeholder="Contact No." value={formData.contact} onChange={handleFormChange} required style={{ width: "100%", marginBottom: 6, padding: 6 }} />
                  <input name="email" placeholder="Email" value={formData.email} onChange={handleFormChange} required style={{ width: "100%", marginBottom: 6, padding: 6 }} />
                  <button type="submit" style={{ background: "#2e86de", color: "#fff", padding: 8, width: "100%", border: "none", borderRadius: 4 }}>Submit</button>
                </form>
              )}
            </div>

            {/* Input Box */}
            <div style={{ display: "flex", padding: 10, borderTop: "1px solid #ccc" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc", marginRight: 6 }}
              />
              <button onClick={sendMessage} style={{ background: "#1abc9c", color: "#fff", border: "none", borderRadius: 4, padding: "8px 12px" }}>
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
