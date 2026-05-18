import AlphabetCard from './AlphabetCard'

export default function AlphabetGrid({ letters, language }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {letters.map((entry) => (
        <AlphabetCard key={entry.letter} {...entry} language={language} />
      ))}
    </div>
  )
}
