import React, { useEffect, useState } from 'react'

function TextSoundAlike({ textData }) {
    const { word, similarSoundingWords } = textData
    const [showAll, setShowAll] = useState(false)
    const [wordList, setWordList] = useState([])

    useEffect(() => {
        if (showAll) {
            console.log("🚀 ~ useEffect ~ similarSoundingWords:", similarSoundingWords)

            setWordList(similarSoundingWords)
        }
        else {
            setWordList(similarSoundingWords.slice(0, 10))
        }
    }, [showAll])

    return (
        <div><p>{word}</p>
            <button onClick={() => setShowAll(prev => !prev)}>Show {showAll ? "Less" : "More"}</button>

            {wordList.map((word, index) => <p key={index}>{word.word}</p>)}
        </div>
    )
}

export default TextSoundAlike