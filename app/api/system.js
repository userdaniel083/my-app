import { generateSystemInfo } from "../../lib/checkInstallation";

export default function handler(req, res) {
  const systemInfo = generateSystemInfo();
  res.status(200).json(systemInfo);
}
