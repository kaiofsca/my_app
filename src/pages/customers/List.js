
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CustomersCard from '../../components/CustomerCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      margin: theme.spacing(2),
    },
}));


const List = () => {
    const classes = useStyles()
    const history = useHistory()

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

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {
            
            const newCustomersState = customers.filter(customer => customer.id !== id)

            setCustomers(newCustomersState)

        })
    }

    const handleEditCustomer = id => {
       history.push(`/customers/edit/${id}`) 
    }

  return (
    
        <Grid container>  {/* Essa propriedade "container" é um boleano true */}
            {
                customers.map(item => (
                    <Grid item xs={12} md={4} xl={3}>
                        <CustomersCard 
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            className={classes.card}
                            onRemoveCustomer={handleRemoveCustomer} // deixando o componente mais agnóstico possível
                            onEditCustomer={handleEditCustomer}
                        />
                    </Grid>
                ))
            }   
        </Grid>
    
    
  )
}

export default List