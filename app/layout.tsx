export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1>System Installation Check</h1>
        {children}
      </body>
    </html>
  );
}
