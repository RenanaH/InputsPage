import React from 'react'
import { InputStyle } from './oneRow.style'
import './oneRow.css'
export default function OneRow(props) {

    return (
        <>
            <InputStyle column='0'
                row={props.dataRow.row}
                isSingleInRow={props.isSingleInRow}>
                <input type={props.dataRow.shape} 
                className='inputInCol'></input>
            </InputStyle>

        </>
    )
}