import React from "react";
import './ResizingSquare.css';

class ResizingSquare extends React.Component {
    state = {
        squareSize: 125,  // размер стороны квадрата в px
        background: 'red',  // blueviolet, purple
    }

    // Функция обновления состояния при изменении значения ползунка
    sizeChangeSquare = (event) => {
        this.setState({ squareSize: event.target.value }); // Обновляем размер квадрата
    }

    render() {
        return (
            <>
                <div className="AllSqrange">
                    <h4>Выберите размер квадрата:</h4>
                    {/* Ползунок для изменения размера */}
                    <div className="inprange">
                        <input type="range" min="25" max="240" step="5"  // мин/макс размеры (px) с шагом изменения
                            onChange={this.sizeChangeSquare} // Функция-обработчик при изменении
                        />
                    </div>
                    {/* Отображение текущего размера*/}
                    <div className="indikatir"> {this.state.squareSize}px * {this.state.squareSize}px </div>
                    {/* Отображение квадрата */}
                    <div
                        style={{
                            width: `${this.state.squareSize}px`,  // Ширина квадрата
                            height: `${this.state.squareSize}px`,  // Высота квадрата
                            background: `${this.state.background}`,  // Цвет
                            margin: '1px auto',  // Внешние отступы
                        }}
                    ></div>
                </div>
            </>
        )
    }
}

export default ResizingSquare;