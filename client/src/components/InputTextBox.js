import { useState } from 'react';

export default function InputTextBox(props) {
    
    const [countletters,setCountLetters] = useState(0);
    const [input,setInput] = useState('');

    function inputChange(e) {
        setInput(e.target.value);
        setCountLetters(e.target.value.length);
        props.onChange(input);
      };
    return(     
        <div >
            <input id={props.id} type="text" value={input} onChange={inputChange}   />
            <p>{countletters}/{props.maxLength} Characters</p>
        </div>
    )
}