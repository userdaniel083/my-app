import getSystemInfo from "../../lib/checkInstallation";

export default function handler(req, res) {
  const systemInfo = getSystemInfo();
  res.status(200).json(systemInfo);
}