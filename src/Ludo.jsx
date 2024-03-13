import { useState } from "react"

export default function Ludobord(){
    let [move,setmove]=useState({blue:0, red:0, green:0, yellow:0});  //Working with "Objects"

    let [arr,setArr]=useState([" no Moves, "]) //Working with "Arrays"

    let updateBlue = () => {
        
        setmove({...move, blue : move.blue+=1});

        // arr.push("blue moves")
        //when we do .push it makes changes in original array and react don't consider it a change so it do not re render.
        
        setArr([...arr,"blue moves, "])
        console.log(arr);
    }
    
    return(
        <div>
            <h1>Game Begins</h1>
            <p>{arr} </p>
            <div className="board">
                <p>Blue moves = {move.blue} </p>
                <button onClick={updateBlue} style={{backgroundColor:"blue", color:"white"}}>+1</button>

                <p>Yellow moves = {move.yellow}</p>
                <button  style={{backgroundColor:"yellow"}}>+1</button>

                <p>Green moves = {move.green}</p>
                <button  style={{backgroundColor:"green"}}>+1</button>
                
                <p>Red moves = {move.red} </p>
                <button  style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}