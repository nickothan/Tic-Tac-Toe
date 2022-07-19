import React from "react";
import Board from "../Board";
import calculateWinner from "../calculateWinner";

import { Turno, GameInfo, BtnHistorico, Content, Container } from './styles';


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
        console.log("Squares::",squares)

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

            const desc = move ? "Movimiento  " + move : "Empezar";
            return (
                <li key={move}>
                    <BtnHistorico onClick={() => this.jumpTo(move)}>{desc}</BtnHistorico>

                </li>
            );
        });
        console.log("winner:: ",winner)

        let status;
        /* Imprimiendo resultado turno y ganador en el dom */
        if (winner) {
            status = "El ganador es " + winner;
        } else {
            status = " jugador: " + (this.state.xIsNext ? " X" : " O");
        }

        return (

            <Container>
                <h1>Tic Tac Toe</h1>
                <Content>
                        <div className="game-board">
                            <Board
                                /* Agregamos componente al dom */
                                squares={current.squares}
                                onClick={(i) => this.handleClick(i)}
                                />
                        </div>
                        <GameInfo>
                            <Turno status={winner ? true : false}>{status}</Turno>
                            <ul>{moves}</ul>
                        </GameInfo>
                    
                </Content>
            </Container>

        );
    }
}

export default Game;
