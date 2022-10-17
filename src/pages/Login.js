import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useAuth from '../state/auth';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3)
    },

    center: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const Login = () => {
    const classes = useStyles()
    const history = useHistory()

    const [form, setForm] = useState({
        email:'',
        password:'',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { setUser } = useAuth()

    const handleInputChange = e => {
        const { name, value } = e.target

        setForm({
            ...form, // pega os dados que o form ja tem para não sobre escrever
            [name]: value
        })
    }

    const handleFormSubmit = () => {
        setTimeout(() => {
            setIsLoading(true)
        
            const response = {
                success: true,
                user: {
                    email: form.email
                }
            }

            setUser({
                logged: response.success,
                user: response.user,
            })

        }, 4000)

        history.push('/')
    }

    return (
        <div className={classes.center}>
            
            <Typography variant="h3">Acesso Restrito</Typography>

            <div className={classes.wrapper}>
                <TextField 
                    onChange={handleInputChange}
                    label="Digite seu email"
                    name="email"
                />
            </div>
            <div className={classes.wrapper}>
                <TextField 
                    onChange={handleInputChange}
                    label="Digite sua senha"
                    name="password"
                    type="password"
                />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                    {
                        isLoading ? 'Aguarde...' : 'Entrar'
                    }
                </Button>
            </div>

        </div>
    )
}

export default Login