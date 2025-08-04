import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function VoiceVisualizer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 80;

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const audioCtx = new AudioContext();
      const analyser = audioCtx.createAnalyser();
      const src = audioCtx.createMediaStreamSource(stream);
      src.connect(analyser);
      analyser.fftSize = 64;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / bufferLength) * 2.5;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          const barHeight = dataArray[i] / 2;
          const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0, "#00ff88");
          gradient.addColorStop(1, "#003322");
          ctx.fillStyle = gradient;
          ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        }
      };
      draw();
    });
  }, []);

  return (
    <motion.div
      className="voice-visualizer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <canvas ref={canvasRef} />
    </motion.div>
  );
}
