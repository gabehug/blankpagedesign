
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 300,
    paddingTop: '56.25%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: "1.5em",
  },
  price: {
    fontSize: '1.2em',
  },
}));