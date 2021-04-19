import React from "react";
import Square from "../Square";

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

export default Board;
