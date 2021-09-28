import React from 'react'
import classes from './Keyboard.module.css'
import KeyboardNumber from './KeyboardNumber'

function Keyboard() {

    return (
        <div className={classes.keyboard}>
            <div className={classes.keyboardRow}>
                <KeyboardNumber number={'X'} />
                <KeyboardNumber number={1} />
                <KeyboardNumber number={2} />
                <KeyboardNumber number={3} />
                <KeyboardNumber number={4} />
            </div>
            <div className={classes.keyboardRow}>
                <KeyboardNumber number={5} />
                <KeyboardNumber number={6} />
                <KeyboardNumber number={7} />
                <KeyboardNumber number={8} />
                <KeyboardNumber number={9} />
            </div>
        </div>
    )
}

export default Keyboard
