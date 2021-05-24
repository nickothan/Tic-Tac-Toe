import styled from 'styled-components/macro';

export const Container = styled.div`
    display: block;
    margin-top: -1px;
    margin-right: -1px;
    padding: 0;
    width: 60px;
    height: 60px;
    float: left;
    text-align: center;
    font-weight: bold;
    border-radius: 3px;
    
    @media screen and (max-width: 250px) {
        width: 50px;
        height: 50px;
    } 
    
    &:focus {
        outline: none;
    }
    
    `;
    
    export const Button = styled.button`
    background-color: royalblue;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 60px;
    line-height: 60px;
    
    border-radius: 3px;
    border: 1px solid blue;

    &:hover {
        background-color: salmon;
    }

`