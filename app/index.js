import { useEffect, useState } from "react";

export default function Home() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    fetch("/api/system")
      .then((res) => res.json())
      .then((data) => setSystemInfo(data))
      .catch((err) => console.error("Error in info:", err));
  }, []);

  if (!systemInfo) return <p>systeem info loading...</p>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>System Installation Check</h1>
      <ul>
        <li><strong>Node.js:</strong> {systemInfo.node}</li>
        <li><strong>npm:</strong> {systemInfo.npm}</li>
        <li><strong>Next.js:</strong> {systemInfo.next}</li>
      </ul>
    </div>
  );
}
