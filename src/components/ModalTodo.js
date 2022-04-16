import React, { useEffect, useState } from "react";


// css
import styles from "../styles/modules/modal.module.css";


// react-icons
import { MdOutlineClose } from "react-icons/md";


// components
import Button from "./Button";


// react-hot-toast
import toast from "react-hot-toast";


// react-redux
import { useDispatch  } from "react-redux";

// action
import { addTodo , updateTodo } from "../redux/todo/todoAction";



// framer-motion
import {  AnimatePresence, motion } from "framer-motion";

const dropI = {
    hidden : {
        opacity : 0 ,
        transform :" scale(.9)" ,
    },
    visible : {
        transform : "scale(1)" ,
        opacity: 1 ,
        transition : {
            duration : .1 ,
            type : "spring" ,
            damping : 25 ,
            stiffness : 500 ,
        } ,
    },

    exit : {
        transform  : "scale(.9)" ,
        opacity : 0 ,
    }

}


const ModalTodo = ({ type , modalOpen , setModalOpen , todo }) => {


    const [title , setTitle] = useState("");
    const [status , setStatus] = useState("incomplete");


    // const todoList = useSelector(state => state.todoState.todoList);
    const dispatch = useDispatch();


    useEffect(() => {
        if(type === "update"){
            setTitle(todo.title);
            setStatus(todo.status);
        }
    } , [modalOpen , todo  , type]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(title === ""){
            toast.error("please enter title");
            return;
        }

        if(type === "add"){
            dispatch(addTodo({
                title ,
                status ,
            }));
            toast.success("Task Add Successfully");
            setTitle("");
        }
        if(type === "update"){
            if(todo.title !== title || todo.status !== status){
                dispatch(updateTodo({
                    ...todo,
                    title ,
                    status ,
                }));
                toast.success("Update successfully");
            }else{
                toast.error("No changes made");
            }
        }
        setModalOpen(false);
    }


    return (
        <AnimatePresence>
            <motion.div 
                className={styles.wrapper} 
                initial={{opacity : 0}} 
                animate={{opacity : 1}}
                exit={{opacity : 0}}
            >
                <motion.div 
                    className={styles.container}
                    variant={dropI}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div 
                        className={styles.closeButton}
                        onClick={() => setModalOpen(false)}
                        initial={{top : 40 , opacity : 0}}
                        animate={{top : -10 , opacity : 1}}
                        exit={{top : 40 , opacity : 0}}
                    >
                        <MdOutlineClose />
                    </motion.div>
                    
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                        <h1 className={styles.formTitle}>
                            {
                                type === "update" ? "update task" : "add task"
                            }   
                        </h1>
                        

                        <label>
                            title
                            <input 
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>

                        <label>
                            status
                            <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="incomplete">incomplete</option>
                                <option value="complete">complete</option>
                            </select>
                        </label>

                        <div className={styles.buttonContainer}>
                            <Button variant="primary" type="submit">
                                {
                                    type === "update" ? "update task" : "add task"
                                }
                            </Button>
                            
                            <Button variant="secondary" type="button" onClick={() => setModalOpen(false)}>
                                cancel
                            </Button>
                        </div>
                        
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ModalTodo;