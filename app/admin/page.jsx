"use client";

import { useState, useEffect } from "react";
import { db } from "@/app/lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
  getDocs,
  where,
  writeBatch,
} from "firebase/firestore";
import { Bell, Eye, EyeOff, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

export default function AdminPage() {
  const [sessions, setSessions] = useState([]);
  const [sessionMap, setSessionMap] = useState({});
  const [selectedSession, setSelectedSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [selectedSessions, setSelectedSessions] = useState(new Set());
  const [notificationCount, setNotificationCount] = useState(0);
  const [firstUserMessageTimes, setFirstUserMessageTimes] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFormText, setSelectedFormText] = useState("");

  const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

  useEffect(() => {
    if (authenticated) return;

    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const userStartedSessions = new Map();

      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        if (data.sender === "user") {
          const existing = userStartedSessions.get(data.sessionId);
          if (!existing || data.timestamp?.toMillis() < existing) {
            userStartedSessions.set(data.sessionId, data.timestamp?.toMillis?.());
          }
        }
      });

      setNotificationCount(userStartedSessions.size);
    });

    return () => unsubscribe();
  }, [authenticated]);

  useEffect(() => {
    if (!authenticated) return;

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      const sessionOrder = [];
      const seen = new Set();
      const validSessions = {};
      const userMessageTimes = {};

      msgs.forEach((msg) => {
        if (msg.sender === "user") {
          if (!seen.has(msg.sessionId)) {
            seen.add(msg.sessionId);
            sessionOrder.push(msg.sessionId);
            userMessageTimes[msg.sessionId] = msg.timestamp?.toDate?.();
          }
          validSessions[msg.sessionId] = true;
        }
      });

      const numberedMap = {};
      sessionOrder.forEach((id, index) => {
        numberedMap[id] = `Session ${index + 1}`;
      });

      setSessions(sessionOrder);
      setSessionMap(numberedMap);
      setFirstUserMessageTimes(userMessageTimes);

      if (selectedSession) {
        const filtered = msgs.filter((msg) => msg.sessionId === selectedSession);
        setMessages(filtered);
      }
    });

    return () => unsubscribe();
  }, [selectedSession, authenticated]);

  const sendReply = async (text) => {
    const finalText = text || reply;
    if (!finalText.trim() || !selectedSession) return;
    await addDoc(collection(db, "messages"), {
      text: finalText,
      sender: "admin",
      sessionId: selectedSession,
      timestamp: serverTimestamp(),
    });
    setReply("");
    setSelectedFormText("");
  };

  const handleLogin = () => {
    if (
      loginData.username === ADMIN_CREDENTIALS.username &&
      loginData.password === ADMIN_CREDENTIALS.password
    ) {
      setAuthenticated(true);
      setNotificationCount(0);
    } else {
      alert("Invalid credentials");
    }
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, "messages", id));
  };

  const deleteSession = async (sessionId) => {
    const messagesQuery = query(
      collection(db, "messages"),
      where("sessionId", "==", sessionId)
    );
    const snapshot = await getDocs(messagesQuery);
    const batch = writeBatch(db);

    snapshot.forEach((docSnap) => {
      batch.delete(doc(db, "messages", docSnap.id));
    });
    await batch.commit();
    setSessions((prev) => prev.filter((s) => s !== sessionId));
    if (selectedSession === sessionId) {
      setSelectedSession(null);
      setMessages([]);
    }
    setSelectedSessions((prev) => {
      const updated = new Set(prev);
      updated.delete(sessionId);
      return updated;
    });
  };

  const deleteSelectedSessions = async () => {
    for (let id of selectedSessions) await deleteSession(id);
    setSelectedSessions(new Set());
  };

  const toggleSessionSelection = (id) => {
    setSelectedSessions((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) updated.delete(id);
      else updated.add(id);
      return updated;
    });
  };

  if (!authenticated) {
    return (
      <div style={{
        height: "100vh",
        background: "url('/iceland.avif') center / cover no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#f1f5f9",
      }}>
        <div style={{ position: "absolute", top: 20, right: 30 }}>
          <Bell size={24} />
          {notificationCount > 0 && (
            <span style={{
              position: "absolute",
              top: -10,
              right: -10,
              backgroundColor: "#ef4444",
              borderRadius: "9999px",
              padding: "2px 8px",
              fontSize: "0.75rem",
              color: "white",
            }}>
              {notificationCount}
            </span>
          )}
        </div>
        <h2 style={{ marginBottom: 20, fontSize: "1.5rem" }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          style={{
            marginBottom: 10,
            padding: 10,
            borderRadius: 6,
            border: "none",
            width: 250,
            color: "#000",
          }}
        />
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            style={{
              marginBottom: 10,
              padding: 10,
              borderRadius: 6,
              border: "none",
              width: 250,
              color: "#000",
            }}
          />
          <span onClick={() => setShowPassword((prev) => !prev)} style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      padding: 20,
      minHeight: "100vh",
      backgroundColor: "#1e293b",
      color: "#f8fafc",
    }}>
      {/* Sessions Panel */}
      <div style={{
        width: "100%",
        maxWidth: 270,
        borderRight: "2px solid #334155",
        paddingRight: 20,
        marginBottom: 20,
      }}>
        <h2 style={{ marginBottom: 20 }}>User Sessions</h2>
        <button
          onClick={deleteSelectedSessions}
          style={{
            marginBottom: 10,
            padding: "8px 12px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}>
          Delete Selected
        </button>
        {sessions.map((id) => (
          <div
            key={id}
            style={{
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
              backgroundColor: selectedSession === id ? "#334155" : "#475569",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <input
              type="checkbox"
              checked={selectedSessions.has(id)}
              onChange={() => toggleSessionSelection(id)}
              style={{ marginRight: 5 }}
            />
            <span onClick={() => setSelectedSession(id)} style={{ flex: 1, cursor: "pointer" }}>
              {sessionMap[id]}
              <br />
              <small style={{ color: "#94a3b8" }}>
                {firstUserMessageTimes[id]?.toLocaleString?.() || ""}
              </small>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteSession(id);
              }}
              style={{
                marginLeft: 10,
                background: "transparent",
                border: "none",
                color: "#f87171",
                cursor: "pointer",
              }}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, paddingLeft: 20 }}>
        <h2 style={{ marginBottom: 10 }}>
          Chat with: <span style={{ color: "#94a3b8" }}>{sessionMap[selectedSession] || "Select a session"}</span>
        </h2>
        <div style={{
          height: 400,
          overflowY: "auto",
          border: "1px solid #334155",
          padding: 10,
          borderRadius: 6,
          marginBottom: 20,
          backgroundColor: "#0f172a",
        }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{
              marginBottom: 10,
              padding: 10,
              backgroundColor: msg.sender === "admin" ? "#1e40af" : "#0369a1",
              borderRadius: 6,
              color: "white",
            }}>
              <strong>{msg.sender === "admin" ? "Admin" : "User"}:</strong> {msg.text}
              <button onClick={() => deleteMessage(msg.id)} style={{
                float: "right",
                background: "transparent",
                color: "#fca5a5",
                border: "none",
                cursor: "pointer",
              }}>✕</button>
            </div>
          ))}
        </div>

        {/* Emoji, Reply Input, Form */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
          <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#f8fafc" }}>
            <Smile size={24} />
          </button>
          {showEmojiPicker && (
  <div style={{ position: "absolute", zIndex: 1000, background: "#fff", borderRadius: "8px", padding: "8px" }}>
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button onClick={() => setShowEmojiPicker(false)} style={{ background: "none", border: "none", fontSize: "16px", cursor: "pointer" }}>
        ❌
      </button>
    </div>
    <EmojiPicker onEmojiClick={(e) => setReply(reply + e.emoji)} />
  </div>
)}

          <input
            type="text"
            placeholder="Type your reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 6,
              border: "1px solid #334155",
              backgroundColor: "#0f172a",
              color: "white",
              minWidth: "200px"
            }}
          />
          <button
            onClick={() => sendReply()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}>
            Send
          </button>
        </div>

        {/* Quick Reply Form */}
        <div style={{ marginTop: 10 }}>
          <select
            value={selectedFormText}
            onChange={(e) => setSelectedFormText(e.target.value)}
            style={{ padding: 8, borderRadius: 6, backgroundColor: "#0f172a", color: "white", border: "1px solid #334155" }}
          >
            <option value="">Quick reply...</option>
            <option value="Thank you for your message. We'll get back soon!">Thanks message</option>
            <option value="Please share your contact details.">Request contact</option>
            <option value="Your query has been received and is under review.">Query received</option>
          </select>
          {selectedFormText && (
            <button
              onClick={() => sendReply(selectedFormText)}
              style={{ marginLeft: 10, padding: "8px 16px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: 6, cursor: "pointer" }}
            >
              Send Reply
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
