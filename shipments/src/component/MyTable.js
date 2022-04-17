import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';



function MyTable(props) {
  let navigate = useNavigate(); 

    const columns = [
      
      {
        title: 'orderNo',
        dataIndex: 'orderNo',
        key: 'orderNo',
        width: 150,
      },
      {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
        width: 75,
      },
        {
          title: 'customer',
          width: 100,
          dataIndex: 'customer',
          key: 'customer',
          //fixed: 'left',
          sorter: (a, b) => a.customer.localeCompare(b.customer),
        },
        {
          title: 'trackingNo',
          dataIndex: 'trackingNo',
          key: 'trackingNo',
          width: 150,
          sorter: (a, b) => a.trackingNo.localeCompare(b.trackingNo),
        },
        {
          title: 'status',
          dataIndex: 'status',
          key: 'status',
          width: 150,
          sorter: (a, b) => a.status.localeCompare(b.status),
        },
        
        {
          title: 'Consignee',
          width: 175,
          dataIndex: 'consignee',
          key: 'consignee',
          sorter: (a, b) => a.consignee.localeCompare(b.consignee),
          //fixed: 'left',
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: (record) => 
          <div>
            <Button onClick={() => routeChange(record)}> Update </Button>
            <Button onClick={() => { deleteItem(record)
                }}>
                delete
            </Button>
            </div>,
          
        },
    ];

    const deleteItem= (record) => {
      //console.log(record)
      props.itemDeleteHandler(1, record.orderNo);
  };

  const routeChange = (record) =>{ 
    let path = `/item/${record.orderNo}`; 
    navigate(path);
  }

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
    console.log(props.shipments)
  }


  return (
    <div>
        <Table columns={columns} dataSource={props.shipments} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
    </div>
  );
}

export default MyTable;