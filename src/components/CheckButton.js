import React from "react";

// css
import styles from "../styles/modules/item.module.css";

// framer-motion
import { motion, useMotionValue, useTransform } from "framer-motion";

import {AiOutlineCheck} from "react-icons/ai";


const checkVariant = {
    initial : {
        color : "#fff" ,
    },
    checked : {
        pathLength : 1 ,
    },
    unChecked : {
        pathLength : 0 ,
    }
}

const boxVariant ={
    checked : {
        background : "var(--primaryPurple)" ,
        transition : { 
            duration :.1 ,
        }
    },
    unChecked : {
        background : "var(--gray-1)",
        transition : { 
            duration :.1 ,
        }
    }
}


const CheckButton = ({check , setCheck , handleCheck}) => {


    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength , [0.05 ,0.15] , [0 , 1])


    return (
        <motion.div 
            className={styles.svgBox}
            animate={check ? "checked" : "unChecked"} 
            variants={boxVariant}
            onClick={handleCheck}   
        >
            <motion.svg
                className={styles.svg}
                viewBox="0 0 53 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    variants={checkVariant}
                    animate={check ? "checked" : "unChecked"}
                    style={{pathLength , opacity}}
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="6"
                    d="M1.5 22L16 36.5L51.5 1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </motion.svg>
        </motion.div>
    );
};

export default CheckButton;