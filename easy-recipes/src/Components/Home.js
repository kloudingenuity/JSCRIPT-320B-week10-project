import React from 'react';
import '../Assets/styles/style.css';

export default function Home() {
    return (
        <div>
            <div className="Toastify"></div>
            <section>
                <article className="home__hero">
                    <div className="home__hero--text" style={{opacity: "1", transform: "translateX(0%)"}}>
                        <h2 className="heading heading--level1">Explore foods from around the globe<span className="gradient--text">.</span></h2>
                        <p className="paragraph color--gray--light">Whether you're looking for healthy recipes, or ideas on how to use leftovers from your fridge, we've numerous recipes to choose from, so you'll be able to find the perfect dish.</p>
                        <a className="button--cta button--regular" href="/search">Search Recipes</a>
                    </div>
                    <div className="home__hero--image" style={{opacity: "1", transform: "translateX(0%)"}}>
                        <img alt="Plate with food" style={{maxWidth:'80%'}} src="./images/hero-min.1cdd2a32.jpeg " />
                    </div>
                </article>
                <article className="home__about container container--withPadding">
                    <h2 className="heading heading--level2">How it works</h2>
                    <p className="paragraph home__subtitle color--gray--light">It only takes a few simple steps to find the recipe you're looking for.</p>
                    <div className="home__wrapper">
                        <div className="home__card">
                            <h3 className="heading heading--level3 home__title">Search by recipe</h3>
                            <p className="paragraph color--gray--light">Already know what you're looking for? Just type the recipe name in search and choose a recipe.</p>
                        </div>
                        <div className="home__card">
                            <h3 className="heading heading--level3 home__title">Search by ingredients</h3>
                            <p className="paragraph color--gray--light">Looking for recipe ideas? Just input ingredients in the Ingredients filter and see what comes up.</p>
                        </div>
                        <div className="home__card">
                            <h3 className="heading heading--level3 home__title">Filter recipes</h3>
                            <p className="paragraph color--gray--light">Want to keep only certain recipes? We have both diet and health filters to help you find the perfect recipe for you.</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}
