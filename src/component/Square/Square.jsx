import React from "react";

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

export default Square;
