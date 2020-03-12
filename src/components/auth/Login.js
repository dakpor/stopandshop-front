import import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'

const Login = (props) => {
    const [user, setUser] = useState({ email: '', password: '' })
    const {email, password } = user

    const alertContext = useContext(AlertContext)
const { setAlert } = alertContext

    const authcontext = useContext(AuthContext)
    const { login, isAuthenticated, error, clearError } = authcontext

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/')
        }
        if(error) {
            setAlert(error, 'danger', 3000)
            clearError()
        }
    }, [isAuthenticated, props.history])

    const handleChange = (e) => {
       setUser({
           ...state,
           [e.target.name]: e.target.value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === '' || password === '') {
            setAlert('Email and Password Required!', 'danger', 3000)
        }
        login({ email, password })
        console.log('User logged in')
    }
    return (
        <div className='form-container'>
            <h1 className='text-primary'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Enter Email</label>
                    <input type='email' name='email' value={email} onChange={handleChange} />
                </div>

                <div className='form-control'>
                    <label htmlFor='password'>Enter Password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    )
}

export default Login
