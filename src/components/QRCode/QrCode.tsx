import QRCode from "qrcode";
import { useEffect, useRef } from "react";

type QrCodeProps = {
  data: string;
  label: string;
  size?: number;
  margin?: number;
  className?: string;
};

const QrCode = ({ data, label, size = 150, margin = 1, className }: QrCodeProps) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    void QRCode.toCanvas(canvas, data, { width: size, margin, errorCorrectionLevel: "M" });
  }, [data, size, margin]);

  return <canvas ref={ref} width={size} height={size} aria-label={label} role="img" className={className} />;
};

export default QrCode;