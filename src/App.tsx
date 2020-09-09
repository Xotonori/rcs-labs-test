import React, {FC, memo, useEffect} from 'react';
import './App.scss';
import {TreeDataMenu} from "./components/TreeDataMenu/TreeDataMenu";
import {Preloader} from "./components/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {getTreeDataThunk} from "./redux/reducer";

export const App: FC = memo(() => {
    const dispatch = useDispatch();
    const isFetching = useSelector((state: AppStateType) => state.Reducer.isFetching);

    useEffect(() => {
        dispatch(getTreeDataThunk());
    }, []);

    return (
        <div className="App">
            {isFetching ? <Preloader/> : <TreeDataMenu/>}
        </div>
    )
})

