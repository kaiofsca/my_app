import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';    

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(4),
    }
  }));


const Register = () => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.wrapper}>
                <TextField label="Nome" />
            </div>
            <div className={classes.wrapper}>
                <TextField label="Cargo" />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary">
                    Cadastrar
                </Button>
            </div>
        </>
    )
}

export default Register