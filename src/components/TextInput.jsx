import React, { useState } from 'react';

function TextInput({ handleSubmit }) {
    const [text, setText] = useState('mahina pa ang tagalog ko')

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, text)}>
                <label htmlFor='inputText'>Enter text:</label>
                <input
                    type='text'
                    id='inputText'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TextInput