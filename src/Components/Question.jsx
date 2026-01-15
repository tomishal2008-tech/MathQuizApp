export default function Question({ data, onAnswer }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{data.question}</h2>

      <div className="space-y-2">
        {data.options.map((opt, index) => (
          <button
            key={index}
            onClick={() => onAnswer(opt)}
            className="block w-full bg-gray-200 hover:bg-gray-300 p-2 rounded"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
