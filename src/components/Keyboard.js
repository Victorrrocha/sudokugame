import React from 'react'
import classes from './Keyboard.module.css'
import KeyboardNumber from './KeyboardNumber'

function Keyboard() {

    return (
        <div className={classes.keyboard}>
            <KeyboardNumber number={0} />
            <KeyboardNumber number={1} />
            <KeyboardNumber number={2} />
            <KeyboardNumber number={3} />
            <KeyboardNumber number={4} />
            <KeyboardNumber number={5} />
            <KeyboardNumber number={6} />
            <KeyboardNumber number={7} />
            <KeyboardNumber number={8} />
            <KeyboardNumber number={9} />
        </div>
    )
}

export default Keyboard
