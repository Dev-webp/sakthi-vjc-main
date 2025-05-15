"use client";

import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Bell } from "lucide-react";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [notificationCount, setNotificationCount] = useState(0);

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

  const handleLogin = () => {
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setAuthenticated(true);
      setNotificationCount(0);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!authenticated) {
    return (
      <AdminLogin
        loginData={loginData}
        setLoginData={setLoginData}
        handleLogin={handleLogin}
        notificationCount={notificationCount}
        Bell={Bell}
      />
    );
  }

  return <AdminDashboard />;
}
