import React from "react";

interface TextFieldProps{
    text: string,
    handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleClear: () => void;
}

function TextField({text, handleTextChange, handleClear} : TextFieldProps) {
    return (
        <>
            <textarea className='textarea' value={text} onChange={handleTextChange} />
            <button className='button' onClick={handleClear}>Reset</button>
        </>
    )
}

export default TextField;