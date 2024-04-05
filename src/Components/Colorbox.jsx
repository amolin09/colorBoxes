import { useState } from 'react'
import "./Colorbox.css"

function randomChoice(arr){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function Colorbox({colors}){

    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor)
    }

    return(
        <div className='Colorbox' onClick={changeColor} style={{ backgroundColor: color}}></div>
    )
}