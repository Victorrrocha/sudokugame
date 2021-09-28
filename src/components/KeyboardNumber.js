import React, { useContext, useEffect, useState } from 'react'
import classes from './KeyboardNumber.module.css'
import SelectedContext from '../context/select-context'

function KeyboardNumber({number}) {

    const ctx = useContext(SelectedContext)
    // const [selected, setSelected] = useState(false)

    const handleClick = () => {
        ctx.select_number(number)
    }

    // useEffect(() => {
    //     if(ctx.selected_number === number){
    //         setSelected(true)
    //     }
    //     else {
    //         setSelected(false)
    //     }
    // }, [ctx, number])

    return (
        <button onClick={handleClick}>{number}</button>
    )
}

export default KeyboardNumber
