import {ThunkAction} from "redux-thunk"
import {AppStateType, InferActionTypes} from "./store";
import {api} from "../api/api";
import {TreeDataType} from "../utils/Types/treeDataTypes";

const SET_TREE_DATA = './recs-labs-test/SET_TREE_DATA'

let initialState = {
    treeData: [] as TreeDataType
}

//Reducers
export const Reducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_TREE_DATA: {
            return {
                ...state,
                treeData: {...action.treeData}
            }
        }
        default:
            return state
    }
}

//Actions
const action = {
    setTreeData: (treeData: TreeDataType) => ({type: SET_TREE_DATA, treeData} as const)
}

//Thunks
export const getTreeDataThunk = (): ThunkType => async (dispatch) => {
    try {
        const treeData = await api.getTreeData();
        const treeDataArray = Object.values(treeData)

        const result = treeDataArray.map((parent) => {
            parent.children = treeDataArray.filter((child) => {
                return child.parent_id === parent.id;
            });
            return parent;
        })
            .filter((mainParent) => {
                return mainParent.parent_id === null;
            });

        console.log(result)
        await dispatch(action.setTreeData(result));
    } catch (e) {
        console.log(e.message);
    }
}

//Types
type ThunkType = ThunkAction<Promise<void>, AppStateType, {}, ActionTypes>
type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>