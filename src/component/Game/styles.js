import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;   
    padding: 20px;
    width: 80%;
    background-color: #ffffcc;
    box-shadow: 0 0 5px 2px yellow;
    border-radius: 8px;

    text-align: center;
`;

export const Content = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    
    @media screen and (max-width: 678px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const GameInfo = styled.div`
    margin-right: 20px;
    background: royalblue;
    border-radius: 4px;
    width: 210px;

    @media screen and (max-width: 678px) {
        margin-right:0px;
        margin-top: 20px;

    }
    
    ul{
        margin: auto;
        padding: 10px ;
        display: grid;
        justify-content: center;
        list-style: none;
        
        li{
            display: grid;
            justify-content: center;

        }
    }
`;

export const Turno = styled.div` 
    padding: 10px;
    background-color: blue;
    color: white;
    border-radius: 4px;
`;

export const BtnHistorico = styled.button`
    margin-bottom: 5px;
    cursor: pointer;
`;