import React from "react";
import styles from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;