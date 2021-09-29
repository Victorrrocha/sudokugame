import React from 'react'
import classes from './Game.module.css'
import SelectProvider from '../context/SelectProvider'
import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

function Game() {
    return (
        <div className={classes.game}>
            <h1 className={classes.logo}>Sudoku</h1>
            <SelectProvider>
                <div className={classes.cols}>
                    <div></div>
                    <Board />
                    <Keyboard />
                </div>
                
            </SelectProvider>
        </div>
    )
}

export default Game
