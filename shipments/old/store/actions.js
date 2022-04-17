export const CART_ADD = "CART_ADD"
export const CART_REMOVE = "CART_REMOVE"
export const CURRENCY_CHANGE = "CURRENCY_CHANGE"


export const addCart = post => ({
    type:  "CART_ADD",
    payload: post
})

export const removeCart = id =>({
    type: "CART_REMOVE",
    payload: id
})

//lisada siis kui 
export const currencyChange = array =>({
    type: "CURRENCY_CHANGE",
    payload: array
})
