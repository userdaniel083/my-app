import { useEffect, useState } from "react";

export default function Home() {
  return <h1>System Installation Status</h1>;
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    fetch("/system.json")
      .then((res) => res.json())
      .then((data) => setSystemInfo(data))
      .catch((err) => console.error("Error loading system info:", err));
  }, []);

  const handleUpdate = async () => {
    await fetch("/api/updateSystem");
    const res = await fetch("/system.json");
    const data = await res.json();
    setSystemInfo(data);
  };

  if (!systemInfo) return <p>Loading system info...</p>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>System Installation Check</h1>
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
