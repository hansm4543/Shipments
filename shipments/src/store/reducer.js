import {POST_REMOVE, POSTS_UPDATE, LOAD_UPDATE, POST_CHANGE} from "./actions";

const postReducer = (state, action) => {
    switch(action.type){
        case POST_REMOVE:
            return{
                ...state,
                data: state.data.filter(post => post.orderNo !== action.payload)
            };
        case POSTS_UPDATE:
            return{
                ...state,
                data: action.payload
            }
        case POST_CHANGE: {
            const index = state.data.findIndex(posts => posts.orderNo == action.payload[3]); //finding index of the item
            const newArray = [...state.data]; //making a new array
            newArray[index].orderNo = action.payload[3]//changing value in the new array
            newArray[index].consignee = action.payload[0]
            newArray[index].customer = action.payload[1]
            newArray[index].date = action.payload[2]
            newArray[index].status = action.payload[4]
            newArray[index].trackingNo = action.payload[5]
            return { 
                ...state, //copying the orignal state
                data: newArray, //reassingning todos to new array
            }
        }
        default:
            return state
    }
}
const loadReducer = (state, action) => {
    switch(action.type){
        case LOAD_UPDATE:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}


export {postReducer, loadReducer};