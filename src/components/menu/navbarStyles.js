import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    top: '50px',
    right: '0px',
    boxShadow: 'none',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  image: {
    alignItems: 'end',
    marginTop: '1em',
  },
  button: {
    position: 'absolute',
    top: '185px',
    right: '40px',
    [theme.breakpoints.up('xs')]: {
      right: '30px',
      top: '185px',
    },
    [theme.breakpoints.up('sm')]: {
      right: '-20px',
      top: '185px',
    },
    [theme.breakpoints.up('md')]: {
      right: '-200px',
    },
    [theme.breakpoints.up('lg')]: {
      right: '-450px',
    },
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
