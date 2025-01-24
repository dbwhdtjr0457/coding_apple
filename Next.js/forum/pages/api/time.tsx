export default function Time(req: any, res: any) {
  const time = new Date().toLocaleTimeString();
  return res.status(200).json({ time });
}
