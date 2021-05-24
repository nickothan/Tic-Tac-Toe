import  styled from 'styled-components/macro';

export const Container = styled.div`
    box-shadow:  0 0 2px 1px blue;
    borer: none;
`;

export const BoardRow = styled.div`
    &::after {
        clear: both;
        content: "";
        display: table;
    }
`;