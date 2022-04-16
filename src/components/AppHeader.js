import React, { useState } from "react";

// css
import styles from "../styles/modules/appHeader.module.css";

// components
import Button , { SelectButton } from "./Button";
import ModalTodo from "./ModalTodo";

// action
import { updateFilterStatus } from "../redux/todo/todoAction";


// react-redux
import { useDispatch , useSelector } from "react-redux";


const AppHeader = () => {

    const [modalOpen , setModalOpen] = useState(false);
    const filterStatus = useSelector(state => state.todoState.filterStatus)
    // const [filterStatus , setFilterStatus] = useState(initialFilterStatus);
    const dispatch = useDispatch();

    const updateFilter = (e) => {
        dispatch(updateFilterStatus(e.target.value));
    }

    return (
        <div className={styles.appHeader}>
            <Button type="button" variant="primary" onClick={() => setModalOpen(true)}>
                add task
            </Button>

            <SelectButton 
                id="status"
                value={filterStatus}
                onChange={updateFilter}
            >
                <option value="all">All</option>
                <option value="incomplete">inComplete</option>
                <option value="complete">Complete</option>
            </SelectButton>

            {
                modalOpen &&
                <ModalTodo type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
            }
        </div>
        
    );
};

export default AppHeader;