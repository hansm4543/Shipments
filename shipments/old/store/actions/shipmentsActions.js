import {GET_SHIPMENTS, SHIPMENTS_ERROR, DELETE_SHIPMENTS} from '../types'
import axios from 'axios'

export const getShipments = () => async dispatch => {
    
    try{
        const res = await axios.get(`Shipments.json`) // https://my.api.mockaroo.com/shipments.json?key=5e0b62d0
        dispatch( {
            type: GET_SHIPMENTS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: SHIPMENTS_ERROR,
            payload: console.log(e),
        })
    }

}
export const removeShipment = orderNo =>({

    type: "DELETE_SHIPMENTS",
    payload: orderNo

    
})