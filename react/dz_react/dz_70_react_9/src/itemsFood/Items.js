import Item from "./Item";
import "./Items.css";

function Items({ items, highlightes, onClickHighlightes, count }) {
   
    return (
        <>
            <ul className="foods-list">
                {
                    items.map(obj => (
                        <Item key={obj.id} {...obj}
                            onClickHighlightes={onClickHighlightes}
                            isHighlighted={highlightes.includes(obj.id)}
                        />
                    ))
                }
                <p>Total Completed: <span>{count}</span></p>
            </ul>
        </>
    )
}

export default Items;