import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {Reducer} from "./reducer";

const rootReducer = combineReducers({
    Reducer
});

export let store = createStore(rootReducer, applyMiddleware(thunk));

//Types
export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never