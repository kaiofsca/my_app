import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


// todo hook começa com o prefixo use
// JSS (Javascript stylesheet)
const useStyles = makeStyles(() => ({ // retorno implicito 
    container: {
      padding: '15px 0', // encima e embaixo 15px e dos lados zero (só relembrando)
    }
}))

export default function Page({ title, Component }) {
    const classes = useStyles()

    return (
        <>
            <Typography variant="h3">
                {title}
            </Typography>
            <Component />
        </>
    )
}
