import React from 'react'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import CustomersCard from '../components/CustomerCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      margin: theme.spacing(2),
    },
}));


export default function Customers() {
    const classes = useStyles()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    // XS = EXTRA SMALL
    // SM = SMALL
    // MD = MEDIUM
    // LG = LARGE
    // XL = EXTRA LARGE

  return (
    <>
        <h1>Customers</h1>
        <Grid container>  {/* Essa propriedade "container" é um boleano true */}
            {
                customers.map(item => (
                    <Grid item xs={12} md={4} xl={3}>
                        <CustomersCard 
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            className={classes.card}
                        />
                    </Grid>
                ))
            }   
        </Grid>
    </>
  )
}