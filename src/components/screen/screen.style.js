import styled from 'styled-components';

export const GridStyle = styled.div`
    display: grid;
    width:40%;
    grid-template-columns: repeat(2,2fr);
    grid-template-rows: repeat(${(props) => props.numRows}, 100px);
    border: 2px solid black;
    `
