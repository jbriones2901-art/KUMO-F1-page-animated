import React from "react";
import { motion } from "framer-motion";

export default function KumoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 flex flex-col items-center justify-center p-6 space-y-10">
      <motion.h1
        className="text-4xl font-bold text-gray-800"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ✨ 给 Kumo 的特别礼物 ✨
      </motion.h1>

      {/* Frases emotivas */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {[
          { cn: "你是我眼中的光。", es: "Eres la luz en mis ojos.", color: "text-pink-600" },
          { cn: "因为有你，世界更美丽。", es: "El mundo es más hermoso porque existes.", color: "text-red-500" },
          { cn: "云朵般的温柔属于你。", es: "La ternura de las nubes te pertenece.", color: "text-purple-600" },
          { cn: "遇见你是最美的意外。", es: "Encontrarte fue el accidente más hermoso.", color: "text-blue-600" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/70 p-6 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className={`text-xl font-semibold ${item.color}`}>{item.cn}</p>
            <p className="text-sm text-gray-600">{item.es}</p>
          </motion.div>
        ))}
      </div>

      {/* Galería de pilotos */}
      <motion.h2
        className="text-3xl font-bold text-gray-700 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        🏎️ Tus pilotos favoritos 🏎️
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {[
          {
            name: "Charles Leclerc",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Charles_Leclerc_2022.jpg/400px-Charles_Leclerc_2022.jpg",
          },
          {
            name: "Lewis Hamilton",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Lewis_Hamilton_2021.jpg/400px-Lewis_Hamilton_2021.jpg",
          },
        ].map((pilot, index) => (
          <motion.div
            key={pilot.name}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={pilot.img}
              alt={pilot.name}
              className="rounded-2xl shadow-lg mx-auto"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">{pilot.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
