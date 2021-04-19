import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => props.onClick()}>
                {props.value}
            </button>
        );
    }
}*/
function Square(props) {
    return (
        <button
            className="square"
            /* hacemos interactividad por cada espacio de la rejilla seleccionada y cambiamos por X al ser oprimido*/
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    /* Metodo constructor para contener arreglo de 9 cuadros*/
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    /* metodo para aplicar los cambios al hacer click al boton */
    handleClick(i) {
        /* Agregamos la inmutabilidad haciendo copias con la propiedad slice() al hacer click*/
        const squares = this.state.squares.slice();
        squares[i] = "X";
        this.setState({squares: squares});
    }

    /* Haciendo un cuadrado*/
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                /* actualizando estado del cuadro al dar click*/
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = "Next player: X";

        /* Datos de rejilla que pasaremos a Square por medio de renderSquare */
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
