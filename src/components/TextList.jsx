import React from 'react'

function TextList({ textList }) {

    if (textList.length === 0) {
        return null
    }
    return (
        <div>
            {JSON.stringify(textList)}
        </div>
    )
}

export default TextList