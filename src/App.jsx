import { motion } from "framer-motion";

export default function KumoPage() {
  const frases = [
    "你是我生命中的光。",
    "与你相遇是我最大的幸运。",
    "你的笑容比阳光还温暖。",
    "星星再亮，也不及你眼中的光彩。",
    "世间美好与你环环相扣。",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 flex flex-col items-center justify-center p-6">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-pink-600 mb-10 text-center"
      >
        致Kumo ❤️
      </motion.h1>

      {/* Frases */}
      <div className="space-y-6 text-center">
        {frases.map((frase, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.4 }}
            className="text-2xl text-gray-800 font-medium"
          >
            {frase}
          </motion.p>
        ))}
      </div>

      {/* Fotos de los pilotos */}
      <div className="grid grid-cols-2 gap-8 mt-12">
        <motion.div whileHover={{ scale: 1.1 }}>
          <img
            src="/img/hamilton.jpg"
            alt="Lewis Hamilton"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img
            src="/img/leclerc.jpg"
            alt="Charles Leclerc"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

