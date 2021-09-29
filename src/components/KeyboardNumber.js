import React, { useContext } from 'react'
import classes from './KeyboardNumber.module.css'
import SelectedContext from '../context/select-context'

function KeyboardNumber({number, text}) {

    const ctx = useContext(SelectedContext)

    const handleClick = () => {
        ctx.select_number(number)
    }

    return (
        <div className={classes.btn} onClick={handleClick}>{number === 0 ? text : number}</div>
    )
}

export default KeyboardNumber
