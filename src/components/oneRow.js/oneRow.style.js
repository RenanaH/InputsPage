import styled from 'styled-components';

export const InputStyle = styled.div`
    grid-row-start: ${(props) => props.row+1}; 
    // if there is one in row its will two column
    grid-column:${(props) => props.isSingleInRow?`span 2`:'span 1'};
    display: flex;
    align-items: center;
    border: 1px solid black;
    justify-content: center;
    `
