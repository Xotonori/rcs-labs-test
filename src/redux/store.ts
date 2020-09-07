import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {Reducer} from "./reducer";


const rootReducer = combineReducers({
    Reducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//Types
export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never