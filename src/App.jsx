import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import { getSimilarSoundingWords } from './services/textService'
import TextList from './components/TextList'
import { generateRandomKey } from './utils/keyGenerator'


function App() {
  const [textList, setTextList] = useState([])
  const handleSubmit = async (e, text) => {
    e.preventDefault()
    const wordList = []
    for (const word of text.trim().split(/\s+/)) {
      const similarSoundingWords = await getSimilarSoundingWords(word)
      wordList.push({ key: generateRandomKey(), word, similarSoundingWords })
    }
    setTextList(wordList)
  }

  return (
    <>
      <h1>Sounds like</h1>
      <TextInput handleSubmit={handleSubmit} />
      <TextList textList={textList} />
    </>
  )
}

export default App
