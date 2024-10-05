import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import { getSimilarSoundingWords } from './services/textService'
import TextList from './components/TextList'
import { generateRandomKey } from './utils/keyGenerator'


function App() {
  const [textList, setTextList] = useState([])
  const fetchSimilarSoundingWords = async (text) => {
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
      <TextInput fetchSimilarSoundingWords={fetchSimilarSoundingWords} />
      <TextList textList={textList} />
    </>
  )
}

export default App
