import { execSync } from "child_process";

function checkInstallation(command) {
  try {
    return execSync(command, { stdio: "pipe" }).toString().trim();
  } catch {
    return "Not Installed";
  }
}

export default function getSystemInfo() {
  return {
    node: checkInstallation("node -v"),
    npm: checkInstallation("npm -v"),
    next: checkInstallation("npx next -v"),
  };
}
