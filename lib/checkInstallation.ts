import { execSync } from "child_process";
import fs from "fs";
import path from "path";

function checkInstallation(command: string): string {
  try {
    return execSync(command, { stdio: "pipe" }).toString().trim();
  } catch (error) {
    console.error(`Error executing ${command}:`, error);
    return "Not Installed";
  }
}

export function generateSystemInfo() {
  const systemInfo = {
    node: checkInstallation("node -v"),
    npm: checkInstallation("npm -v"),
    next: checkInstallation("npx next -v"),
    timestamp: new Date().toISOString(),
  };

  const filePath = path.join(process.cwd(), "public", "system.json");

  try {
    fs.writeFileSync(filePath, JSON.stringify(systemInfo, null, 2));
    console.log("System information written to:", filePath);
  } catch (error) {
    console.error("Error writing system.json:", error);
  }

  return systemInfo;
}
