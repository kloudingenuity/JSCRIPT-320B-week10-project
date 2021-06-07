import React, {useEffect} from 'react'
import { useHistory } from 'react-router';
import '../Assets/styles/style.css';

export default function RecipeDetails(props) {
    const history = useHistory();
    const cardDetails = props.location.state;

    useEffect(() => {            
      window.scrollTo(0, 0);
    })

    const ingredients = cardDetails.recipe.ingredientLines.map((item, index) => {
        return(
            <li key={index}>{item}</li>
        );
    });

    const totalNutrients = Object.keys(cardDetails.recipe.totalNutrients).map((key, index) => {
        return(
            <tr key={index}>
                <td>{cardDetails.recipe.totalNutrients[key].label}</td>
                <td>{cardDetails.recipe.totalDaily[key] ? `${(cardDetails.recipe.totalDaily[key].quantity).toFixed(2)} ${cardDetails.recipe.totalDaily[key].unit}` : ''}</td>
                <td>{(cardDetails.recipe.totalNutrients[key].quantity).toFixed(2)} {cardDetails.recipe.totalNutrients[key].unit}</td>
            </tr>
        );
    });

    const dietLabels = cardDetails.recipe.cautions.map((item, index) => {
        return `${item}, `;
    });

    const healthLabels = cardDetails.recipe.healthLabels.map((item, index) => {
        return `${item}, `;
    });

    const cautionLabels = cardDetails.recipe.cautions.map((item, index) => {
        return `${item}, `;
    });

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <div class="Toastify"></div>
            <section className='container container--withPadding'>
                <header class="recipe__header">
                    <div class="recipe__header--image">
                        <div class="media__wrapper">
                            <img src={cardDetails.recipe.image} alt={cardDetails.recipe.label} />
                        </div>
                    </div>
                    <div class="recipe__header--content">
                        <div>
                            <button class="button button--secondary recipe__link" onClick={goBack} >
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                                </svg> Return to recipes</button>
                        </div>
                        <div>
                            <h2 class="heading heading--level1 recipe__title--main">{cardDetails.recipe.label}</h2>
                            <p class="paragraph">By <a href={cardDetails.recipe.url} target="_blank" rel="noopener noreferrer">
                                <strong class="gradient--text">{cardDetails.recipe.source}</strong></a> | <button><strong class="gradient--text">Save Recipe</strong></button>
                            </p>
                        </div>
                        <div>
                            <strong class="gradient--text">{Math.round(cardDetails.recipe.calories)}</strong> calories | <strong class="gradient--text">{cardDetails.recipe.ingredientLines.length}</strong> servings
                    </div>
                    </div>
                </header>
                <div class="recipe__wrapper">
                    <article>
                        <h3 class="heading heading--level3">Ingredients</h3>
                        <ul class="list--styled">                            
                            {ingredients}
                        </ul>
                    </article>
                    <article>
                        <h3 class="heading heading--level3">Preparation</h3>
                        <p class="paragraph">This recipe is provided by <a href={cardDetails.recipe.url} target="_blank" rel="noopener noreferrer"><strong class="gradient--text">{cardDetails.recipe.source}</strong></a>. You can view the detailed preparation instructions by clicking the following link.</p>
                        <a href={cardDetails.recipe.url} target="_blank" rel="noopener noreferrer" class="button button--regular button--cta">Preparation Instructions</a>
                    </article>
                </div>
                <div class="recipe__wrapper">
                    <article>
                        <h3 class="heading heading--level3">Nutrition</h3>
                        <div class="accordion__content">
                            <table>
                                <tbody>
                                    {totalNutrients}
                                </tbody>
                            </table>
                        </div>
                    </article>
                    <article>
                        <h3 class="heading heading--level3">Diet</h3>
                        <p class="paragraph">{cautionLabels}{dietLabels}{healthLabels}</p>
                        <ul class="dietGraph">
                            <li class="dietGraph__item dietGraph__item--0">
                                <div class="dietGraph__graph dietGraph__graph--0" style={{height: cardDetails.recipe.totalNutrients['FAT'].quantity/2}}></div>
                                <small class="dietGraph__label">Fat</small><small class="dietGraph__info">{(cardDetails.recipe.totalNutrients['FAT'].quantity).toFixed(2)}{cardDetails.recipe.totalNutrients['FAT'].unit} ({(cardDetails.recipe.totalDaily['FAT'].quantity).toFixed(2)}{cardDetails.recipe.totalDaily['FAT'].unit})</small>
                            </li>
                            <li class="dietGraph__item dietGraph__item--1">
                                <div class="dietGraph__graph dietGraph__graph--1" style={{height: cardDetails.recipe.totalNutrients['CHOCDF'].quantity/2}}></div>
                                <small class="dietGraph__label">Carbs</small><small class="dietGraph__info">{(cardDetails.recipe.totalNutrients['CHOCDF'].quantity).toFixed(2)}{cardDetails.recipe.totalNutrients['CHOCDF'].unit} ({(cardDetails.recipe.totalDaily['CHOCDF'].quantity).toFixed(2)}{cardDetails.recipe.totalDaily['CHOCDF'].unit})</small>
                            </li>
                            <li class="dietGraph__item dietGraph__item--2">
                                <div class="dietGraph__graph dietGraph__graph--2" style={{height: cardDetails.recipe.totalNutrients['PROCNT'].quantity/2}}></div>
                                <small class="dietGraph__label">Protein</small><small class="dietGraph__info">{(cardDetails.recipe.totalNutrients['PROCNT'].quantity).toFixed(2)}{cardDetails.recipe.totalNutrients['PROCNT'].unit} ({(cardDetails.recipe.totalDaily['PROCNT'].quantity).toFixed(2)}{cardDetails.recipe.totalDaily['PROCNT'].unit})</small>
                            </li>
                        </ul>
                    </article>
                    </div>
            </section>
        </div>
    )
}
