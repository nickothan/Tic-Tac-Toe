import { Container, Button } from './styles';

function Square(props) {
    return (
        <Container>
            <Button
                className="square"
                /* hacemos interactividad por cada espacio de la rejilla seleccionada y cambiamos por X al ser oprimido*/
                onClick={props.onClick}
                >
                {props.value}
            </Button>
        </Container>
    );
}

export default Square;
