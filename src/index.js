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
    /* Haciendo un cuadrado*/
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                /* actualizando estado del cuadro al dar click*/
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        /* Datos de rejilla que pasaremos a Square por medio de renderSquare */
        return (
            <div>
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
    /* Establecer estado inicial para Historial de jugadas */
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                },
            ],
            /* Agregamos StepNumber para indicar que empezamos en el turno 0 */
            stepNumber: 0,
            xIsNext: true,
        };
    }
    /* metodo para aplicar los cambios al hacer click al boton */
    handleClick(i) {
        /*asegurar que si volvemos en el tiempo y hacemos una jugada el historial futuro se borra */
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        /* Agregamos la inmutabilidad haciendo copias con la propiedad slice() al hacer click*/
        const squares = current.squares.slice();

        /*Ignorar cambios cuando hay un ganador o el cuadro esta lleno */
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        /* Alternar  turnos X y O con if*/
        squares[i] = this.state.xIsNext ? "X" : "O";

        this.setState({
            history: history.concat([
                {
                    squares: squares,
                },
            ]),

            /*Nos aseguramos de no estancarnos en un movimiento */
            stepNumber: history.length,

            /* invertir valor de turnos al dar click*/
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            /* actualizar stepNumber  */
            stepNumber: step,
            /* Establecer si el numero que vemos es par */
            xIsNext: step % 2 === 0,
        });
    }

    render() {
        const history = this.state.history;
        /*Renderizamos el movimiento seleccionado */
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        /* Mapeando el historial */
        const moves = history.map((step, move) => {
            const desc = move ? "Movimiento  #" + move : "Listo para empezar";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        /* Imprimiendo resultado turno y ganador en el dom */
        if (winner) {
            status = "Ganador: " + winner;
        } else {
            status = "Siguiente jugador: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        /* Agregamos componente al dom */
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
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
