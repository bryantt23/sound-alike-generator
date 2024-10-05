import React from 'react'
import TextSoundAlike from './TextSoundAlike'

function TextList({ textList }) {
    if (textList.length === 0) {
        return null
    }

    return (
        <div className="textListContainer">
            {textList.map((textData) => <TextSoundAlike key={textData.key} textData={textData} />)}
        </div>
    )
}

export default TextList