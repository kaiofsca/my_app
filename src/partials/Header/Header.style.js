import { makeStyles } from '@material-ui/core/styles';

// todo hook começa com o prefixo use
// JSS (Javascript stylesheet)
const useStyles = makeStyles(() => ({ // retorno implicito 
    title: {
      flexGrow: 1,
      marginLeft: 10,
    }
  }))

  export default useStyles