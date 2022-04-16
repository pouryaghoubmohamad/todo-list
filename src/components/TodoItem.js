import React, { useEffect, useState } from "react";

// css
import styles from "../styles/modules/item.module.css";


// components
import CheckButton from "./CheckButton";
import ModalTodo from "./ModalTodo";


// utils
import { getClasses } from "../utils/getClasses";


// date-fns
import { compareAsc, format } from "date-fns";


// react-icons
import { MdDelete , MdEdit } from "react-icons/md";



// action
import { removeTodo , updateTodo } from "../redux/todo/todoAction";

// react-redux
import { useDispatch } from "react-redux";


// react-hot-toast
import toast from "react-hot-toast";


// framer-motion
import { motion, useMotionValue, useTransform } from "framer-motion";

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









const TodoItem = ({todo}) => {

    const [updateModalOpen , setUpdateModalOpen] = useState(false);
    const [check , setCheck] = useState(false);


    
    
    const {id , title , status , time } = todo ;

    useEffect(() => {
        if(status === "complete"){
            setCheck(true);
        }else{
            setCheck(false);
        }
    } , [status]);





 






    
    // redux
    const dispatch = useDispatch();

    const removeTodoList = () => {
        dispatch(removeTodo(todo));
        toast.success("Todo Update Successfully")
    }

    const updateTodoList = () => {
        setUpdateModalOpen(true);
    }

    const handleCheck = () => {
        setCheck(!check);
        dispatch(updateTodo({
            ...todo ,
            status : check ? "incomplete" : "complete"
        }))
        toast.success("Todo Update Successfully");
    }



    return (
        <motion.div className={styles.item} variants={child}>
            <div className={styles.todoDetails}>
                <CheckButton check={check} setCheck={setCheck} handleCheck={handleCheck}/>
                <div className={styles.texts}>
                    <p className={getClasses([
                        styles.todoText ,
                        status === "complete" && styles[`todoText--complete`]
                    ])}>
                        <p>{title}</p>
                    </p>
                    <p className={styles.time}>
                        {
                            format(new Date(todo.time), 'p ,MM-dd-yyyy')
                        }
                    </p>
                </div>
            </div>
            <div className={styles.todoAction}>
                <div className={styles.icon} onClick={() => removeTodoList()}>
                    <MdDelete />
                </div>
                <div className={styles.icon} onClick={() => updateTodoList()}>
                    <MdEdit />
                </div>
            </div>
            {
                updateModalOpen &&
                <ModalTodo  modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} todo={todo} />
            }

        </motion.div>

    );
};

export default TodoItem;