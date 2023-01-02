import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {PostActionsType, postReducer} from "../components/posts/post-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    posts:postReducer
})
//store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppActionsType =PostActionsType