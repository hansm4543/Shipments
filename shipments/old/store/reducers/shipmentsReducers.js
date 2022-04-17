import {GET_SHIPMENTS, DELETE_SHIPMENTS} from '../types'

const initialState = {
    shipments:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_SHIPMENTS:
        return {
            ...state,
            shipments:action.payload,
            loading:false

        }
        case DELETE_SHIPMENTS:
        return{
            ...state,
            data: state.data.filter(post => post.orderNo !== action.payload)
        };
        default: return state
    }

}