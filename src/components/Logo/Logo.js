import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.css';

const logo = () => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alr="MyBurger" />
    </div>
);

export default logo;