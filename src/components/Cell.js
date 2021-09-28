import React, { useState, useEffect, useContext } from 'react'
import styles from '../styles/Cell.module.css'
import SelectedContext from '../context/select-context'
import compareObjs from '../helpers/ObjectEquality'
import CheckBoundaries from '../helpers/Boundaries'

export default function Cell({row, col}) {

    const ctx = useContext(SelectedContext)

    const [selected, setSelected] = useState(false)
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState(ctx.grid[row][col])
    const [locked, setLocked] = useState(false)

    const onSelect = () => {
        ctx.select_position({row: row, col: col})
    }

    useEffect(() => {
        if(ctx.selected_cell.row > -1 && ctx.selected_cell.col > -1){

            if(compareObjs(ctx.selected_cell, {row: row, col: col})){
                setSelected(true)
                setFocus(false)
                setValue(ctx.grid[row][col])
            }

            else if(ctx.selected_cell.row === row || ctx.selected_cell.col === col || CheckBoundaries(ctx.grid, ctx.selected_cell, row, col)){
                setSelected(false)
                setFocus(true)
            }
            else{
                setSelected(false)
                setFocus(false)
            }
        }
    }, [ctx, col, row] )

    return (
        <div onClick={onSelect} id={`${row}-${col}`} 
            className = {`${styles.cell} + ${focus ? styles.focus : ""} + ${selected ? styles.selected : "" }`}>
            <span >{value > 0 ? value : ""}</span>
        </div>
    )
}
