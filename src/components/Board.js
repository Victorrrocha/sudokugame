import React, {useContext} from 'react'
import styles from '../styles/Board.module.css'
import Cell from './Cell'
import FixedCell from './FixedCell'
import SelectedContext from '../context/select-context'

export default function Board() {

    const ctx = useContext(SelectedContext)

    //ja tem a grid
    return (
        <div className={styles.table}>
            {ctx.grid.map((elem, col) => {
                return(
                <div key={col} className={styles.col}>
                    {elem.map( (cell, row) => { 
                        if(ctx.initial_grid[row][col] !== 0){
                            return <FixedCell 
                                key={col + row}
                                value={ctx.grid[row][col]}
                                row={row} col={col}/>
                        }
                        else{
                            return <Cell 
                                key={col + row}
                                row={row} col={col} />
                        }
                    }) }
                </div>)
            })}
        </div>
    )
}
