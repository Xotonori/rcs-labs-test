import React, {memo, useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {getTreeDataThunk} from "./redux/reducer";
import {TreeDataItemType} from "./utils/Types/treeDataTypes";

export const App = memo(() => {

    const dispatch = useDispatch();

    const {Reducer: {treeData}} = useSelector((state: AppStateType) => state);

    useEffect(() => {
        dispatch(getTreeDataThunk());
    }, [])

    const treeDataArray = Object.values(treeData);

    return (
        <div className="App">
            {treeDataArray && treeDataArray.map((item: TreeDataItemType) => {
                let {id, parent_id, srt, title} = item;
                return (
                    <div>
                        <h3>{title}</h3>
                        <p>id: {id}</p>
                        <p>parent_id: {parent_id ? parent_id : 'no'}</p>
                        <p>srt: {srt}</p>
                    </div>
                )
            })}
        </div>
    );
})

