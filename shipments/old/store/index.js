import { createContext, useReducer } from "react";
import { cartReducer, currencyReducer } from "./reducer";
import combineReducers from "react-combine-reducers";

const initalCart = {
    data: []

}

const selectedCurrency = {
    data: ["USD"]
}

const [combinedReducer, initialState] = combineReducers({
    cart: [cartReducer, initalCart],
    currency: [currencyReducer, selectedCurrency]
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