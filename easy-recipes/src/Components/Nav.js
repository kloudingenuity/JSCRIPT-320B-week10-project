import React from 'react'
import {Link, NavLink } from 'react-router-dom';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../Assets/styles/style.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root}  style={{ marginBottom:'100px' }}>
          
    <StylesProvider injectFirst>
            <AppBar position="static" >
                <Toolbar className="nav">
                <Link className="nav__link nav__link--active" to='/' color="inherit">Home</Link>
                <Link className="nav__list nav__link--active" to='/search' color="inherit">Search</Link>
                </Toolbar>
            </AppBar>
            </StylesProvider>
        </div>
    )
}
