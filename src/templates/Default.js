
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from "../partials/Header/Header"


// todo hook começa com o prefixo use
// JSS (Javascript stylesheet)
const useStyles = makeStyles(() => ({ // retorno implicito 
    container: {
      padding: '15px 0', // encima e embaixo 15px e dos lados zero (só relembrando)
    }
}))

export default function Default({ children }) {
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}
