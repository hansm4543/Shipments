
export const POST_REMOVE = "POST_REMOVE"
export const POSTS_UPDATE = "POSTS_UPDATE"
export const LOAD_UPDATE = "LOAD_UPDATE"
export const POST_CHANGE = "POST_CHANGE"


export const removePost = orderNo =>({
    type: "POST_REMOVE",
    payload: orderNo
})

export const updatePosts = array =>({
    type: "POSTS_UPDATE",
    payload: array
})
export const updateLoad = array =>({
    type: "LOAD_UPDATE",
    payload: array
})

export const changePost= array =>({
    type: "POST_CHANGE",
    payload: array
})