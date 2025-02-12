"use client";

import { useEffect, useState } from "react";

interface SystemInfo {
  node: string;
  npm: string;
  next: string;
  timestamp: string;
}

export default function Home() {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);

  useEffect(() => {
    fetch("/system.json")
      .then((res) => res.json())
      .then((data: SystemInfo) => setSystemInfo(data))
      .catch((err) => console.error("Error fetching system info:", err));
  }, []);

  const handleUpdate = async () => {
    await fetch("/api/update");
    const res = await fetch("/system.json");
    const data: SystemInfo = await res.json();
    setSystemInfo(data);
  };

  if (!systemInfo) return <p>Loading system info...</p>;

  return (
    <div>
      <h1>System Installation Status</h1>
      <ul>
        <li><strong>Node.js:</strong> {systemInfo.node}</li>
        <li><strong>npm:</strong> {systemInfo.npm}</li>
        <li><strong>Next.js:</strong> {systemInfo.next}</li>
        <li><strong>Last Checked:</strong> {new Date(systemInfo.timestamp).toLocaleString()}</li>
      </ul>
      <button onClick={handleUpdate} style={{ padding: "10px", cursor: "pointer" }}>
        Refresh System Info
      </button>
    </div>
  );
}
