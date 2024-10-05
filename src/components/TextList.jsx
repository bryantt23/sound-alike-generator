import React from 'react'
import TextSoundAlike from './TextSoundAlike'

function TextList({ textList }) {
    console.log("🚀 ~ TextList ~ textList:", textList)
    if (textList.length === 0) {
        return null
    }

    return (
        <div style={{ display: 'flex' }}>
            {textList.map((textData) => <TextSoundAlike key={textData.key} textData={textData} />)}
        </div>
    )
}

export default TextList