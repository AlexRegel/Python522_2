import { useState } from "react";


function Counter(){
    let [cnt, setCnt] = useState(0);

    let increment = () => setCnt(cnt + 1);
    // let decrement = () => setCnt(cnt - 1);  // можно и обычную функцию
    function decrement(){
        setCnt(cnt - 1);
    }


    return(
        <div>
            <h2>Счётчик: </h2>
            <h1>{cnt}</h1>
            <button onClick={decrement}>- Минус</button>
            <button onClick={increment}>+ Плюс</button>
        </div>
    )
}

export default Counter;