import React from "react";


// css
import styles from "./styles/modules/app.module.css";

// components
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";


// react-hot-toast
import { Toaster } from "react-hot-toast";


// react-redux
import { Provider } from "react-redux";


// redux
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <PageTitle />
                <div className={styles.app__wrapper}>
                    <AppHeader />   
                    <AppContent />
                </div>
            </div>
            <Toaster position="bottom-right" />
        </Provider>
    );
};

export default App;