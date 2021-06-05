import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import RecipeSearch from './RecipeSearch';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import Nav from './Nav';

function Routes() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/recipelist/:query/:health?/:diet?" component={RecipeList} />
                <Route path="/recipe/:id" component={RecipeList} />
                <Route path="/search" component={RecipeSearch} />
                <Route path="/details" component={RecipeDetails} />
            </Switch>
        </Router>
    );
}

export default Routes;
