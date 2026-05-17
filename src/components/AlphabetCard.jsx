export default function AlphabetCard({ letter, phonetic, word, pronunciation }) {
  return (
    <div className="flex flex-col items-center text-center py-3">
      <span className="text-2xl font-bold text-brand-blue">{letter}</span>
      <span className="text-sm text-brand-blue mt-0.5">{phonetic}</span>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">{word}</span>
      <span className="text-xs italic text-gray-600 dark:text-gray-400 mt-0.5">{pronunciation}</span>
    </div>
  )
}
