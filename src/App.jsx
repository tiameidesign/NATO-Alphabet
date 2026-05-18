import { useState, useEffect } from 'react'
import Header from './components/Header'
import AlphabetGrid from './components/AlphabetGrid'
import { alphabetData, languages } from './data/alphabets'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('EN')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const letters = alphabetData[language] ?? alphabetData['EN']

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-md mx-auto px-4 py-6 md:max-w-2xl lg:max-w-5xl">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode((d) => !d)}
        />

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {languages[language].description}
        </p>

        <AlphabetGrid letters={letters} language={language} />
      </div>
    </div>
  )
}
