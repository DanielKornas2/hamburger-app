import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    // ingredients - it's object, not array, so i use object keys..
    const transformedIngredients = Object.keys(props.ingredients)
    //then map and return new array , finally - return BurgerIngredient component based on state values
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient type={igKey} key={igKey + i} />;
            });
        });

    return (
        //burger types are defined in BurgerIngredient component - switch statement
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;