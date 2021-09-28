import React, { useState, useEffect, useContext } from 'react'
import classes from './FixedCell.module.css'
import SelectedContext from '../context/select-context'
import CheckBoundaries from '../helpers/Boundaries'

export default function FixedCell({value, row, col}) {

    const ctx = useContext(SelectedContext)

    const [focus, setFocus] = useState(false)

    useEffect(() => {
        if(ctx.selected_cell.row > -1 && ctx.selected_cell.col > -1){
            if(ctx.selected_cell.row === row || ctx.selected_cell.col === col || CheckBoundaries(ctx.grid, ctx.selected_cell, row, col)){
                setFocus(true)
            }
            else{
                setFocus(false)
            }
        }
    }, [ctx, col, row] )

    return (
        <div id={`${row}-${col}`} className = {`${classes.cell} + ${focus ? classes.focus : ""}`}>
          <span className={classes.locked}>{value}</span>
        </div>
    )
}
