import { useRef } from "react";

export default function App() {
  const f1Sound = useRef(null);
  const song = useRef(null);

  const playF1 = () => {
    f1Sound.current.play();
  };

  const playSong = () => {
    song.current.play();
  };

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

      {/* 按钮播放声音 */}
      <div className="space-x-6 mt-10">
        <button
          onClick={playF1}
          className="px-6 py-3 bg-red-600 rounded-xl shadow-lg hover:bg-red-700 transition"
        >
          播放F1音效
        </button>
        <button
          onClick={playSong}
          className="px-6 py-3 bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          播放歌曲
        </button>
      </div>

      {/* 音频标签 */}
      <audio ref={f1Sound} src="/audio/f1.mp3" preload="auto" />
      <audio ref={song} src="/audio/mary.mp3" preload="auto" />
    </div>
  );
}
