import AlphabetCard from './AlphabetCard'

export default function AlphabetGrid({ letters }) {
  return (
    <div className="grid grid-cols-3 divide-x divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-sm">
      {letters.map((entry) => (
        <AlphabetCard key={entry.letter} {...entry} />
      ))}
    </div>
  )
}
