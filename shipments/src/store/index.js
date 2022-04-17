import { createContext, useReducer, useEffect, useState } from "react";
import { postReducer, loadReducer } from "./reducer";
import combineReducers from "react-combine-reducers";
import axios from 'axios';

const initalPosts = {
    data: []

}

const initalLoad = {
    data: [true]

}

const [combinedReducer, initialState] = combineReducers({
    posts: [postReducer, initalPosts],
    load: [loadReducer, initalLoad],

})

export const Context = createContext(initialState)

function Store({children}){
    const [state, dispatch] = useReducer(combinedReducer, initialState)

    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
}

export default Store