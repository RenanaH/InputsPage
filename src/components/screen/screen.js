import React from 'react'
import OneRow from '../oneRow.js/oneRow'
import './screen.css'
import { GridStyle } from './screen.style'

export default function Screen(props) {

    const { sortArrayDataRow } = props

    const renderDataRows = () => {

        let isSingleInRow = false

        return sortArrayDataRow.map((rowData, index) => {

            isSingleInRow = false
            if (index != sortArrayDataRow.length - 1 && (rowData.row == sortArrayDataRow[index + 1].row))
             {
                 //in the case of two inputs in a row
                return <OneRow dataRow={sortArrayDataRow[index ++]} />
            }
            else
            //in the case of one input in a row
                isSingleInRow = true
            return <OneRow dataRow={rowData} isSingleInRow={isSingleInRow} />

        });

    }
    return (
        <>
            <GridStyle numRows={sortArrayDataRow && sortArrayDataRow[sortArrayDataRow.length - 1].row + 1}>
                {renderDataRows()}
            </GridStyle>

        </>
    )
}