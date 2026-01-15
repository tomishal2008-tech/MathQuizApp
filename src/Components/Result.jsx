export default function Result({ score, total, onRestart }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished 🎉</h2>
      <p className="text-lg mb-4">
        Your Score: {score} / {total}
      </p>

      <button
        onClick={onRestart}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Restart Quiz
      </button>
    </div>
  );
}
