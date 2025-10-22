function Item({ id, name_food,
    onClickHighlightes,
    isHighlighted }) {

    return (
        <li>
            <div className="text">
                {/* Установим тег <label> для связки с <input
                    type="checkbox" id={id}>, через атрибут htmlFor={id}: */}
                <label htmlFor={id}>
                    <input
                        type="checkbox" id={id}  // Для озможности клика по тексту
                        // id={id} => <label htmlFor={id}>                        
                        checked={isHighlighted}  // Состояние опции checkbox (есть галочка или её нет)
                        onChange={() => onClickHighlightes(id)}  // Обработка события клика
                        style={{ width: '15px', height: '15px' }}
                    /><span style={{
                        marginLeft: '10px',
                        fontSize: 18,
                        color: isHighlighted ? 'blue' : 'black', // не в фигурных скобках 
                        fontWeight: isHighlighted ? 'bold' : 'normal', //{isHighlighted ? "yellow" : "black"} - так не работает
                    }}>{name_food}</span>
                </label>
                {/* Используем тернарный оператор для условного рендеринга символа.
    Если "isHighlighted" истинно (true), отображаем '+', если ложно (false), отображаем '-'. */}
                <div className="button"><b onClick={() => onClickHighlightes(id)}>
                    {isHighlighted ? " + " : " - "}</b></div>
            </div>
        </li>
    )
}

export default Item;