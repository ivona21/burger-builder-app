import React from "react";
import PropTypes from "prop-types";
import styles from "./BuildControl.css";

const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button className={styles.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={styles.More} onClick={props.added}>More</button>
    </div>
)

buildControl.propTypes = {
    label: PropTypes.string
}

export default buildControl;