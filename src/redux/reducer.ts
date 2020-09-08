import {ThunkAction} from "redux-thunk"
import {AppStateType, InferActionTypes} from "./store";
import {api} from "../api/api";
import {TreeDataType} from "../utils/Types/treeDataTypes";

const SET_TREE_DATA = './recs-labs-test/SET_TREE_DATA'
const IS_FETCHING_SUCCESS = './recs-labs-test/IS_FETCHING_SUCCESS'

let initialState = {
    treeData: [] as TreeDataType,
    isFetching: false
}

//Reducers
export const Reducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_TREE_DATA: {
            return {
                ...state,
                treeData: [...action.treeData]
            }
        }
        case IS_FETCHING_SUCCESS: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

//Actions
const actions = {
    setTreeDataSuccess: (treeData: TreeDataType) => ({type: SET_TREE_DATA, treeData} as const),
    isFetchingSuccess: (isFetching: boolean) => ({type: IS_FETCHING_SUCCESS, isFetching} as const),
}

//Thunks
export const getTreeDataThunk = (): ThunkType => async (dispatch) => {
    await dispatch(actions.isFetchingSuccess(true));
    try {
        const treeData = await api.getTreeData();
        const treeDataArray = Object.values(treeData);

        const result = treeDataArray.map((parent) => {
            parent.children = treeDataArray.filter((child) => {
                //Заполняем дочерними элементами массив children
                return child.parent_id === parent.id;
            }).sort((a, b) => {
                //Сортируем дочерние элементы
                return (a.srt !== b.srt) ? (a.srt > b.srt) ? 1 : -1 : 0;
            })
            return parent;
        })
            .filter((mainParent) => {
                //Возвращаем только главные элементы
                return mainParent.parent_id === null;
            });

        console.log(result)
        await dispatch(actions.setTreeDataSuccess(result));
    } catch (e) {
        console.log(e.message);
    }
    await dispatch(actions.isFetchingSuccess(false));
}

//Types
type ThunkType = ThunkAction<Promise<void>, AppStateType, {}, ActionTypes>
type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof actions>