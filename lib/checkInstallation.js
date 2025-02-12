const { execSync } = require("child_process");

function checkInstallation(command) {
  try {
    return execSync(command, { stdio: "pipe" }).toString().trim();
  } catch (error) {
    return "Not Installed";
  }
}

function getSystemInfo() {
  return {
    node: checkInstallation("node -v"),
    npm: checkInstallation("npm -v"),
    next: checkInstallation("npx next -v"),
  };
}

module.exports = getSystemInfo;
