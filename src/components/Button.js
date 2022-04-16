import React from "react";

// css
import styles from "../styles/modules/button.module.css";


// utils
import { getClasses } from "../utils/getClasses";


const buttonType = {
    primary : "primary" ,
    secondary : "secondary" ,
}

const Button = ({ type , variant , children , ...rest}) => {
    return (
        <button 
            className={getClasses([
                styles.button ,
                styles[`button--${buttonType[variant]}`]
            ])}
            {...rest}
        >
            {children}
        </button>
    );
};


const SelectButton = ({children , ...rest}) => {
    return(
        <select
            className={getClasses([
                styles.button ,
                styles.button__select
            ])}
            {...rest}
        >
            {children}
        </select>
    )
}

export { SelectButton }
export default Button;