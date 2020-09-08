import React, {memo} from 'react';
import './App.scss';
import {TreeDataMenu} from "./components/TreeDataMenu/TreeDataMenu";

export const App = memo(() => {

    return (
        <div className="App">
            <TreeDataMenu/>
        </div>
    );
})

