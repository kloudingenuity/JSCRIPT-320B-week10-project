import React, { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router';
import RecipeData from '../Assets/data/recipes.json';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Grid, TextField, Chip, Typography, CardActionArea } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1200,
      margin:100
    },
    media: {
      height: 140,
      paddingTop: '56.25%', // 16:9
    },
    h2: {
      margin: "inherit"
    },
    details: {
      display: "flex",
      flexDirection: "column",
      width:"100%"
    },
    content: {
      flex: "1 0 auto",
      height: "150px"
    },
    cover: {
      width: 800
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    },
    pageroot: {
        '& > *': {
          marginTop: theme.spacing(2),
        }
      },
    autocomplete: {
        width: 300,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    }
}));

export default function RecipeList() {
    var config = {
        appId: "7fa0e9a0",
        appKey: "292eb66a5e30c1091c5eb80377ca630b"
    };
    const classes = useStyles();
    const {query, health, diet} = useParams();
    const [searchKey, setQuery] = useState(query);
    const [data, setData] = useState([]);
    const [currentPageContent, setcurrentPageContent] = useState([]);
    const [loading, setLoading] = useState(false);  
    const [healthKey, setHealthKey] = useState(health ? health.split('&') : []);
    const [dietKey, setDietKey] = useState(diet);
    const [page, setPage] = useState(1);  
    const [count, setCount] = useState(0); 

    const history = useHistory();
    //const searchKey = 'q=breakfast';

    useEffect(() => {
        setLoading(true);
        setData(RecipeData);        
        setcurrentPageContent(RecipeData.hits.slice(0, 12));
        setCount(Math.ceil(RecipeData.to/12));

        const h = (healthKey.length > 0) ? `&health=${healthKey.join("&")}` : '';
        const d = dietKey ? `&diet=${dietKey}` : '';
        // if(searchKey)
        //     fetch(`https://api.edamam.com/search?app_id=${config.appId}&app_key=${config.appKey}&q=${searchKey}${h}${d}&from=0&to=100`)
        //         .then(response => response.json())
        //         .then(data => {
        //             setData(data);        
        //             setcurrentPageContent(data.hits.slice(0, 12));
        //             setCount(Math.ceil(data.to/12));
        //         })
        //         .then(() => {
        //             setLoading(false);
        //         })
        //         .catch(() => {
                    
        //         });                 
      window.scrollTo(0, 0);
      setLoading(false);
     }, [searchKey, healthKey, dietKey]);

    const healthLabels = [
        { label: 'Vegan', key: "vegan", description: "No meat, poultry, fish, dairy, eggs or honey" },
        { label: "Vegetarian", key: "vegetarian", description: "No meat, poultry, or fish"},
        { label: "Sugar-conscious", key: "sugar-conscious", description: "Less than 4g of sugar per serving"},
        { label: "Peanut-free", key: "peanut-free", description: "No peanuts or products containing peanuts"},
        { label: "Tree-nut-free", key: "tree-nut-free", description: "No tree nuts or products containing tree nuts"},
        { label: "Alcohol-free", key: "alcohol-free", description: "No alcohol used or contained"}
    ];
    
    const dietLabels = [
        { label: 'Balanced', key: "balanced", description: "Protein/Fat/Carb values in 15/35/50 ratio" },
        { label: "High-Protein", key: "high-protein", description: "More than 50% of total calories from proteins"},
        { label: "Low-Carb", key: "low-carb", description: "Less than 20% of total calories from carbs"},
        { label: "Low-Fat", key: "low-fat", description: "Less than 15% of total calories from fat"}
    ];

    const onCardClick = (card) => {
        history.push({
            pathname: `/details`,
            state: card
        });
    }

    const onQueryChange = (e) => {
        setQuery(e.target.value);
    }

    const onSearchClick = (e) => {
        e.preventDefault();
        const h = healthKey.length ? `${healthKey.join("&")}` : "";
        const d = dietKey ? `${dietKey}` : "";
        history.push(`/recipelist/${searchKey}/${h}/${d}`);
    }
    
    const handlePageChange = (event, value) => {
        setPage(value);
        setcurrentPageContent(data.hits.slice((value*12)-12, (value*12)));
    };

    const cardContent = currentPageContent
                            .map((item, index) => {
                                return(
                                    <Grid key={index} item xs={3}>
                                        <Card>
                                            <CardActionArea onClick={() => onCardClick(item)}>
                                                <div className='media__wrapper'>
                                                    {loading ? (
                                                        <Skeleton animation="wave" variant="rect" className='recipeCard__image' />
                                                    ) : (
                                                        <CardMedia className='recipeCard__image'
                                                            component="img"
                                                            alt="Contemplative Reptile"
                                                            
                                                            image={item.recipe.image}
                                                            title={item.recipe.label}
                                                        /> 
                                                    )}
                                                </div>
                                                <CardContent key={index}>
                                                    {loading ? (
                                                        <React.Fragment>
                                                            <Skeleton animation="wave" height={10}/>
                                                            <Skeleton animation="wave" height={10}/>
                                                            <Skeleton animation="wave" height={10}/>
                                                        </React.Fragment>
                                                    ) : (
                                                        <React.Fragment>
                                                            <Typography gutterBottom variant="h6" component="h6">
                                                                {item.recipe.label}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                By <span className="gradient--text">{item.recipe.source}</span>
                                                                <br/ >
                                                                <strong className="gradient--text">{Math.round(item.recipe.calories)}</strong> calories | <strong className="gradient--text">{item.recipe.ingredientLines.length}</strong> ingredients
                                                            </Typography>
                                                        </React.Fragment>
                                                    )}
                                            </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            });

    return (
        <div className={classes.root}>
            <section className='recipeCategories'>
                <aside className="filters">
                    <div className="filters__group">
                        <div className="toggleable">
                            <Autocomplete className={classes.autocomplete}
                                onChange={(e, value) => setHealthKey(value)}
                                multiple
                                id="health-tags-filled"
                                options={healthLabels.map((option) => option.label)}   
                                defaultValue={healthKey}                          
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                ))
                                }
                                renderInput={(params) => (
                                <TextField {...params} variant="filled" label="Health Lables" placeholder="" />
                                )}
                            />
                        </div>
                        <div className="toggleable" style={{marginLeft:20}}>
                            <Autocomplete className={classes.autocomplete}
                                onChange={(e, value) => setDietKey(value)}                                
                                id="diet-tags-filled"
                                options={dietLabels.map((option) => option.label)}    
                                defaultValue={dietKey ? dietKey : ''}                             
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                ))
                                }
                                renderInput={(params) => (
                                <TextField {...params} variant="filled" label="Diet Lables" placeholder="" />
                                )}
                            />
                        </div>
                    </div>
                
                    <form className="inputWrapper--withButton" onSubmit={onSearchClick}>
                        <input className="input input--field" type="search" placeholder="Recipe Search" value={searchKey} onChange={onQueryChange} />
                        <button className="button button--regular button--cta button--icon" type="submit">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </form>
                </aside>
                <Grid container spacing={3} direction="row">
                    {cardContent}                
                </Grid>
                <div className={classes.pageroot}>
                    <Pagination count={count} page={page} onChange={handlePageChange} variant="outlined" color="primary" /> 
                </div> 
            </section>    
        </div>
    )
}
