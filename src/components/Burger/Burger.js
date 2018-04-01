import React from "react";
import styles from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(
        (ingredientName) => {
            return [...Array(props.ingredients[ingredientName])].map(
                (_, i) => {
                    return <BurgerIngredient 
                                key={ingredientName + i}
                                type={ingredientName}/>
                }
            )
        }
    )
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;