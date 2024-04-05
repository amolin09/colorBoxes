import './ColorboxGrid.css'
import Colorbox from './Colorbox'

export default function ColorboxGrid({colors}){
    const boxes = [];
    for(let i = 0; i < 25; i++){
        boxes.push(<Colorbox colors={colors}/>)
    }

    return(
        <div className='ColorboxGrid'>{boxes}</div>
    )
}