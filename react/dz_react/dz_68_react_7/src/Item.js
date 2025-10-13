import { useState } from "react";


function Item() {

    let [item, setItem] = useState([0]);

    function addItem() {

        setItem([
            ...item,
            Math.floor(Math.random() * 10) + 1
        ])


    }

    return (
        <div>
            {
                console.log(item)
            }

            <button onClick={addItem}>Add a number</button>
            {
                item.map((i, index) => (
                    <div
                        key={index}
                        style={{background: index % 2 ? 'gray' : 'yellow'}}
                    >{i}</div>
                ))
            }
            {/* <div>{item}</div> */}
        </div>
    )
}

export default Item;