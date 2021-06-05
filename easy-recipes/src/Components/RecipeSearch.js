import React, { Fragment, useState }  from 'react';
import { useHistory } from 'react-router';
import RecipeCard from './RecipeCard';
import data from '../Assets/data/data.json';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import '../Assets/styles/style.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft:100,
      marginRight:100
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function RecipeSearch() {    
    const history = useHistory();
    const classes = useStyles();
    
    const [searchKey, setSearchKey] = useState("");

    const onSearchClick = (e) => {
        e.preventDefault();
        history.push(`/recipelist/${searchKey}`);
    }

    const mealOfDay = data.mealofday.map((item, index) => {
        return(
            <Fragment key={index.toString()}>
                <Grid item>
                    <RecipeCard card={item} />
                </Grid> 
                <Divider light />
            </Fragment>
        );
    });

    const healthyMeal = data.healthymeal.map((item, index) => {
        return(
            <Fragment key={index.toString()}>
                <Grid item>
                    <RecipeCard card={item} />
                </Grid> 
                <Divider light />
            </Fragment>
        );
    });

    const dietMeal = data.dietmeal.map((item, index) => {
        return(
            <Fragment key={index.toString()}>
                <Grid item>
                    <RecipeCard card={item} />
                </Grid> 
                <Divider light />
            </Fragment>
        );
    });

    const cuisines = data.cuisines.map((item, index) => {
        return(
            <Fragment key={index.toString()}>
                <Grid item>
                    <RecipeCard card={item} />
                </Grid> 
                <Divider light />
            </Fragment>
        );
    });

    return (
        <div className={classes.root}>
            <section className='recipeCategories'>
                <article className="heroBanner recipeCategories__hero">
                    <div className="recipeCategories__heroContent container container--withPadding">
                        <h2 className="heading heading--level2 recipeCategories__heroTitle" style={{opacity: "1", transform: "translateY(0%)"}}>Search through 1.7+ million recipes</h2>
                        <form className="inputWrapper--withButton" style={{opacity: "1", transform: "translateY(0%)"}} 
                         onSubmit={onSearchClick}>
                            <input className="input input--field" type="search" placeholder="Recipe Search" value={searchKey} onChange={e => setSearchKey(e.target.value)} />
                            <button className="button button--regular button--cta button--icon" type='submit'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="heroBanner__background recipeCategories__heroBackground" style={{opacity: "0.6", transform: "translateX(0%)"}}></div>
                </article>
                <div className='container' style={{marginBottom:'40px'}}>
                    <article className="recipeCategories__wrapper" style={{opacity: '1', transform: 'translateY(0%)'}}>
                        <h2 className="heading heading--level3 recipeCategories__title"><span>Meals of the day</span></h2>                    
                        <Grid className='recipeCategories__list' container spacing={3}>
                            {mealOfDay}
                        </Grid>                
                    </article>
                </div>                
                <div className='container' style={{marginBottom:'40px'}}>
                    <article className="recipeCategories__wrapper" style={{opacity: '1', transform: 'translateY(0%)'}}>
                        <h2 className="heading heading--level3 recipeCategories__title"><span>Healthy meals</span></h2>                    
                        <Grid className='recipeCategories__list' container spacing={3}>
                            {healthyMeal}
                        </Grid>                
                    </article>
                </div>                
                <div className='container' style={{marginBottom:'40px'}}>
                    <article className="recipeCategories__wrapper" style={{opacity: '1', transform: 'translateY(0%)'}}>
                        <h2 className="heading heading--level3 recipeCategories__title"><span>Diet meals</span></h2>                    
                        <Grid className='recipeCategories__list' container spacing={3}>
                            {dietMeal}
                        </Grid>                
                    </article>
                </div>
                <div className='container' style={{marginBottom:'40px'}}>
                    <article className="recipeCategories__wrapper" style={{opacity: '1', transform: 'translateY(0%)'}}>
                        <h2 className="heading heading--level3 recipeCategories__title"><span>Around the world</span></h2>                    
                        <Grid className='recipeCategories__list' container spacing={3}>
                            {cuisines}
                        </Grid>                
                    </article>
                </div>
            </section>
        </div>
    )
}
