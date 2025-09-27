import React from "react";
import { motion } from "framer-motion";

const frases = [
  "你是我心中最美的星辰 ✨",
  "遇见你是我最美的奇迹 💫",
  "无论未来多远，我都愿与你同行 🚀",
  "你的笑容比阳光还温暖 ☀️",
  "你是我生命中最珍贵的礼物 🎁",
  "和你在一起，世界变得更加美好 🌸"
];

export default function KumoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-6">
      <h1 className="text-5xl font-bold text-purple-900 mb-10 drop-shadow-lg">
        致Kumo ❤️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
        {frases.map((frase, i) => (
          <motion.div
            key={i}
            className="bg-white/80 rounded-2xl p-6 shadow-lg text-center text-xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {frase}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
