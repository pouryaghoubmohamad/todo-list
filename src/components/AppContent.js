import React from "react";

// css
import styles from "../styles/modules/appContent.module.css";

// redux
import { useSelector  } from "react-redux";


// assets
import empty from "../assets/images/empty-state_4x.webp";


// components
import TodoItem from "./TodoItem";


// framer-motion
import { AnimatePresence, motion } from "framer-motion";





const container = {
    hidden : {
        opacity : 1 ,
    },

    visible : {
        opacity: 1 ,
        scale : 1 ,
        transition : {
            staggerChildren : .2 ,
        }
    }
}


const child = {
    hidden : {
        y : 20 ,
        opacity: 0 ,
    },
    visible : {
        y : 0 ,
        opacity: 1 ,
    }
}


const AppContent = () => {

    const todoList = useSelector(state => state.todoState.todoList);
    const filterStatus = useSelector(state => state.todoState.filterStatus);
    console.log(filterStatus)
    const todoListSort = [...todoList];
    todoListSort.sort((a,b) => new Date(b.time) - new Date(a.time));

    const filterTodoList = todoListSort.filter((item) => {
        if(filterStatus === "all"){
            return true
        }

        return item.status === filterStatus ;
    });





    return (
        <motion.div 
            className={styles.content__wrapper}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <AnimatePresence>
                {

                    filterTodoList && filterTodoList.length > 0 
                    ?
                  (  filterTodoList.map(item => <TodoItem 
                        key={item.id}
                        todo={item}
                        />)
                    )
                    :
                    
                    <motion.img src={empty} alt="" className={styles.emptyImage} variants={child} />

                //    ( <motion.p variants={child} className={styles.emptyText}>
                //         No Todos
                //     </motion.p>)
                }
            </AnimatePresence>
        </motion.div>
    );
};

export default AppContent;