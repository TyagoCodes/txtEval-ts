import './App.css';
import React, {useState} from "react";
// import syllabify from "syllabify-fr";
import Circle from './components/Circle';
import Stats from "./components/Stats.tsx";
import TextField from './components/TextField.tsx';
import useSyllableCounter from "./hooks/useSyllabeCounter.tsx";

function countWords(text: string): number{
    if(!text || text.trim() == ""){
        return 0;
    }
    return text.trim().split(/\s+/).length;
}

//pure logic function
// function countSyllables(text: string): number{
//     const words = text.split(' ');
//     const nbSyllabes = words.reduce((sum:number,word:string) => sum + syllabify(word).nb, 0)
//     return nbSyllabes;
// }

function toColor(wordCount:number){
    if(wordCount <= 10){
        return 'green';
    }
    if(wordCount <= 15){
        return 'orange';
    }
    return 'red';
}

function toSize(wordCount:number){
    const MAX_SIZE = 200;
    return Math.min(wordCount * 10, MAX_SIZE);
}

const App = () => {
    const [text, setText] = useState('');

    const handleTextChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    const handleClear = () => {
      setText('');
    };

    const wordCount = countWords(text);
    // const syllableCount = countSyllables(text);
    const syllableCount = useSyllableCounter(text);
    const circleSize = toSize(wordCount);
    const circleColor = toColor(wordCount);

    return (
        <>
            <h1>Évaluateur de texte</h1>
            <TextField text={text} handleTextChange={handleTextChange} handleClear={handleClear} />
            <Stats text={text} wordCount={wordCount} syllableCount={syllableCount} />
            <Circle size={circleSize} color={circleColor} />
        </>
    );
}

export default App;