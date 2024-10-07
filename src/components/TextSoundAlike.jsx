import React, { useEffect, useState } from 'react'

function TextSoundAlike({ textData }) {
    const { word, similarSoundingWords } = textData
    const [showAll, setShowAll] = useState(false)
    const [wordList, setWordList] = useState([])

    useEffect(() => {
        if (showAll) {
            setWordList(similarSoundingWords)
        }
        else {
            setWordList(similarSoundingWords.slice(0, 10))
        }
    }, [showAll])

    return (
        <div className="textSoundAlike">
            <p><strong>{word}</strong></p>
            <button className="showMoreToggle"
                onClick={() => setShowAll(prev => !prev)}
            >
                Show {showAll ? "Less" : "More"}
            </button>

            <div
                onClick={() => setShowAll(prev => !prev)}
            >
                {wordList.map((word, index) => <p key={index}>{word.word}</p>)}
            </div>
        </div>
    )
}

export default TextSoundAlike