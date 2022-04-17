import React, { Component, useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {removeShipment} from '../store/actions/shipmentsActions'
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';



function MyTable(props) {
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

    function deleteItem(record){
        console.log(record.orderNo);
        removeShipment(record.orderNo);
    }

  return (
    <div>
        <Table columns={columns} dataSource={props.shipments} scroll={{ x: 1500, y: 600 }} />
    </div>
  );
}

export default MyTable;