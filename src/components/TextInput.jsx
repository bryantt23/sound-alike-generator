import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash'

function TextInput({ fetchSimilarSoundingWords }) {
    const [text, setText] = useState('mahina pa ang tagalog ko')
    const debounceRef = useRef(debounce((t) => {
        fetchSimilarSoundingWords(t)
    }, 1000))

    useEffect(() => {
        debounceRef.current(text)
    }, [text])

    return (
        <div>
            <label htmlFor='inputText'>Enter text:</label>
            <input
                type='text'
                id='inputText'
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </div>
    )
}

export default TextInput