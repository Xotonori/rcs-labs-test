import {ThunkAction} from "redux-thunk"
import {AppStateType, InferActionTypes} from "./store";
import {api} from "../api/api";
import {treeData} from "../utils/Types/treeDataTypes";

const SET_TREE_DATA = './recs-labs-test/SET_TREE_DATA'

let initialState = {
    treeData: {} as treeData
}

//Reducers
export const Reducer = (state: InitialState = initialState, action: ActionTypes) => {
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
    setTreeData: (treeData: any) => ({type: SET_TREE_DATA, treeData} as const)
}

//Thunks
export const getTreeDataThunk = (): ThunkType => async (dispatch) => {
    try {
        const treeData = await api.getTreeData();
        await dispatch(action.setTreeData(treeData))
    } catch (e) {
        console.log(e.message)
    }
}

//Types
type ThunkType = ThunkAction<Promise<void>, AppStateType, {}, ActionTypes>
type InitialState = typeof initialState
type ActionTypes = InferActionTypes<typeof action>