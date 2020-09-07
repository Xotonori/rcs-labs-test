import React from "react";
import {HashRouter} from "react-router-dom";
import {store} from "./redux/store";
import {App} from "./App";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
