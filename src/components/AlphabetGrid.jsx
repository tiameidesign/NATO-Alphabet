import AlphabetCard from './AlphabetCard'

export default function AlphabetGrid({ letters, language }) {
  return (
    <div className="grid grid-cols-3">
      {letters.map((entry) => (
        <AlphabetCard key={entry.letter} {...entry} language={language} />
      ))}
    </div>
  )
}
