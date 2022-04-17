import React, { Component, useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getShipments} from '../store/actions/shipmentsActions'
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';

import MyTable from './MyTable'

/*
const columns = [
    {
      title: 'Consignee',
      width: 175,
      dataIndex: 'consignee',
      key: 'consignee',
      //fixed: 'left',
    },
    {
      title: 'Customer',
      width: 100,
      dataIndex: 'customer',
      key: 'customer',
      //fixed: 'left',
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
      width: 75,
    },
    {
      title: 'orderNo',
      dataIndex: 'orderNo',
      key: 'orderNo',
      width: 150,
    },
    {
      title: 'trackingNo',
      dataIndex: 'trackingNo',
      key: 'trackingNo',
      width: 150,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (record) => 
      <div>
        <Button> view </Button>
        <Button onClick={() => { deleteItem(record)
            }}>
            delete
        </Button>
        </div>,
      
    },
];

*/

class shipments extends Component {
    
    componentDidMount(){
        this.props.getShipments()
        
    }

    render() {
        const {shipments} = this.props.shipments
        console.log(shipments)

        
        return (
            <div>
                 <h1>Shipments</h1>
                <MyTable shipments={shipments}/>
                
            </div>
        )
    }
}
const mapStateToProps  = (state) => (
    {shipments:state.shipments}
)


export default connect(mapStateToProps, {getShipments})(shipments)