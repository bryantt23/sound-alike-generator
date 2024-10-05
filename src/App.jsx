import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import { getSoundAlikeWords } from './services/textService'
import TextList from './components/TextList'


function App() {
  const [textList, setTextList] = useState([])
  const handleSubmit = async (e, text) => {
    e.preventDefault()
    const wordList = []
    for (const word of text.split(" ")) {
      const soundAlike = await getSoundAlikeWords(word)
      wordList.push({ word, soundAlike })
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
