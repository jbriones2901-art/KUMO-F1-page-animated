import { motion } from "framer-motion";
import { useState } from "react";

export default function KumoPage() {
  const frases = [
    "Kumo，你是我生命中的光芒。",
    "Kumo，你的笑容温暖了我的心。",
    "Kumo，每一天都因为你而变得特别。",
    "Kumo，你是我永远的奇迹。",
    "Kumo，你的存在让我的世界完整。",
    "Kumo，我愿意陪你走过每一个季节。"
  ];

  const galleryImages = [
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Charles_Leclerc_2019_Formula_One_tests_Barcelona_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Lewis_Hamilton_2016_Malaysia_2_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ferrari_SF21_Charles_Leclerc_2021.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Mercedes_AMG_F1_W12_E_Performance_2021.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % galleryImages.length);
  const prevImage = () => setCurrent((current - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      {/* Frases animadas */}
      <div className="space-y-4 max-w-2xl text-center">
        {frases.map((frase, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold text-gray-800"
          >
            {frase}
          </motion.p>
        ))}
      </div>

      {/* Galería interactiva con animación */}
      <div className="relative w-full max-w-xl">
        <motion.img
          key={current}
          src={galleryImages[current]}
          alt="F1 Gallery"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={prevImage} className="bg-white/80 rounded-full px-3 py-1 shadow-md">◀</button>
          <button onClick={nextImage} className="bg-white/80 rounded-full px-3 py-1 shadow-md">▶</button>
        </div>
      </div>
    </div>
  );
}