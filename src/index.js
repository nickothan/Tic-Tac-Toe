import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
            /* booleano */
            xIsNext: true,
        };
    }

    /* metodo para aplicar los cambios al hacer click al boton */
    handleClick(i) {
        /* Agregamos la inmutabilidad haciendo copias con la propiedad slice() al hacer click*/
        const squares = this.state.squares.slice();

        /*Ignorar cambios cuando hay un ganador o el cuadro esta lleno */
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        /* Alternar  turnos X y O con if*/
        squares[i] = this.state.xIsNext ? "X" : "O";

        this.setState({
            squares: squares,

            /* invertir valor de turnos al dar click*/
            xIsNext: !this.state.xIsNext,
        });
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
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            /*Declarando a un ganador*/
            status = "Winner " + winner;
        } else {
            /*Cambio de  status */
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

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

/* Declarando un ganador*/
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
