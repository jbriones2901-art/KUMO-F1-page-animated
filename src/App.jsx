export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">致Kumo的真挚话语</h1>

      {/* 句子 */}
      <div className="mb-12 text-center">
        <p className="text-xl mb-2">你的微笑比阳光还要温暖。</p>
        <p className="text-xl mb-2">认识你是我生命中最美丽的意外。</p>
        <p className="text-xl mb-2">愿你的人生充满光明与幸福。</p>
        <p className="text-xl">你是独一无二的存在。</p>
      </div>

      {/* 汉密尔顿 */}
      <div className="mb-12 text-center">
        <img
          src="/img/hamilton.jpg"
          alt="刘易斯·汉密尔顿"
          className="w-60 mx-auto rounded-2xl shadow-lg mb-4"
        />
        <p className="text-2xl">刘易斯·汉密尔顿</p>
        <p className="text-gray-400 mt-2">七届世界冠军</p>
      </div>

      {/* 勒克莱尔 */}
      <div className="mb-12 text-center">
        <img
          src="/img/leclerc.jpg"
          alt="夏尔·勒克莱尔"
          className="w-60 mx-auto rounded-2xl shadow-lg mb-4"
        />
        <p className="text-2xl">夏尔·勒克莱尔</p>
        <p className="text-gray-400 mt-2">年轻的法拉利希望</p>
      </div>
    </div>
  );
}
