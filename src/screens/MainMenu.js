import React, {useState} from 'react'
import { useHistory } from 'react-router'
import classes from './MainMenu.module.css'
import MenuBottom from '../components/menuButton/MenuBottom'

const Login = () => {
    return (
        <>
            <div className={classes.inputField}>
                <label htmlFor="email">Email</label>
                <input required name="email" type="text" />
            </div>
            <div className={classes.inputField}>
                <label htmlFor="password">Password</label>
                <input required name="password" type="password" />
            </div>
        </>
    )
}

const Register = () => {
    return (
        <>  
            <div className={classes.inputField}>
                <label htmlFor="username">Name</label>
                <input required name="username" type="text" />
            </div>
            <div className={classes.inputField}>
                <label htmlFor="email">Email</label>
                <input required name="email" type="text" />
            </div>
            <div className={classes.inputField}>
                <label htmlFor="password">Password</label>
                <input required name="password" type="password" />
            </div>
        </>
    )
}

function MainMenu() {

    let history = useHistory()

    const [onLogin, setOnLogin] = useState(true)

    const handleRegistration = (e) => {
        e.preventDefault()
        if(onLogin){
            console.log("Login")
        }
        else{
            console.log("Registering")
        }
    }

    const PlayGame = () => {
        history.push("/sudoku")
    }

    const LoginPage = () => {
        setOnLogin(true)
    }

    const RegisterPage = () => {
        setOnLogin(false)
    }

    return (
        <div className={classes.menu_screen}>
            <div className={classes.main}>
                <header>
                    <p className={classes.title}>
                       Sudoku
                    </p>
                </header>
                <main className={classes.menu}>
                    <div className={classes.justPlay}>
                        <div onClick={PlayGame} className={`${classes.toggleRegistrationBtn} + ${classes.btnSelected}`} >
                            <p>Just Play</p> 
                        </div>
                        <p className={classes.subtitle}>or sign in first</p>
                    </div>
                    
                    <div className={classes.registration}>
                        <form>
                            {onLogin ?
                                <Login />
                                :
                                <Register />
                            }

                            <div className={classes.toggleRegistration}>
                                <div 
                                    className={`${classes.toggleRegistrationBtn} + ${onLogin ? classes.btnSelected : classes.btnUnselected}`} 
                                    onClick={onLogin ? handleRegistration : LoginPage }>
                                    <p>Login</p>
                                </div>
                                <div 
                                    className={`${classes.toggleRegistrationBtn} + ${onLogin ? classes.btnUnselected : classes.btnSelected}`} 
                                    onClick={onLogin ? RegisterPage : handleRegistration }>
                                    <p>Register</p>
                                </div>
                            </div>
                            
                        </form>
                    </div>

                </main>

                <footer>
                    <p>Made by Victor Rocha</p>
                </footer>
            </div>

            <div className={classes.img_container}>

            </div>
        </div>
    )
}

export default MainMenu
