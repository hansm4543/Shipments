import { combineReducers } from 'redux'
import shipmentReducer from './shipmentsReducers'

export default combineReducers({
  shipments: shipmentReducer
})