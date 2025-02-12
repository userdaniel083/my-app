import { execSync } from "child_process";
import fs from "fs";
import path from "path";

function checkInstallation(command) {
  try {
    return execSync(command, { stdio: "pipe" }).toString().trim();
  } catch {
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

  // Write the JSON file
  fs.writeFileSync(filePath, JSON.stringify(systemInfo, null, 2));

  return systemInfo;
}
