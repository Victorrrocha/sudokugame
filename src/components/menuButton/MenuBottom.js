import React from 'react'
import classes from './MenuBottom.module.css'
import { Link } from 'react-router-dom'

function MenuBottom({title, address}) {
    return (
        <Link to={`/${address}`}>
            <div className={classes.btn_main} >
                <p className={classes.title}>
                    {title}
                </p>
            </div>
        </Link>
    )
}

export default MenuBottom
