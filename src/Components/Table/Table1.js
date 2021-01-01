import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {TableTheme} from "./TableStyle"
import { Table} from 'antd';

const deleteicon = (<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.64286 0.687504H6.96429L6.75446 0.285746C6.71002 0.199854 6.64155 0.127604 6.55677 0.0771237C6.47198 0.0266431 6.37425 -6.50539e-05 6.27455 3.76679e-06H3.72321C3.62375 -0.000364272 3.52618 0.0262443 3.4417 0.0767811C3.35721 0.127318 3.28923 0.199738 3.24554 0.285746L3.03571 0.687504H0.357143C0.262423 0.687504 0.171582 0.72372 0.104605 0.788186C0.0376275 0.852651 0 0.940085 0 1.03125L0 1.71875C0 1.80992 0.0376275 1.89736 0.104605 1.96182C0.171582 2.02629 0.262423 2.0625 0.357143 2.0625H9.64286C9.73758 2.0625 9.82842 2.02629 9.8954 1.96182C9.96237 1.89736 10 1.80992 10 1.71875V1.03125C10 0.940085 9.96237 0.852651 9.8954 0.788186C9.82842 0.72372 9.73758 0.687504 9.64286 0.687504ZM1.1875 10.0332C1.20453 10.295 1.32459 10.5407 1.52323 10.7204C1.72186 10.9 1.98415 11 2.2567 11H7.7433C8.01585 11 8.27814 10.9 8.47677 10.7204C8.67541 10.5407 8.79547 10.295 8.8125 10.0332L9.28571 2.75H0.714286L1.1875 10.0332Z" fill="#88CDFF" />
        </svg>)




const editicon = (<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6971 3.05144L9.70658 4.04191C9.6056 4.14289 9.44231 4.14289 9.34133 4.04191L6.95645 1.65705C6.85547 1.55607 6.85547 1.39278 6.95645 1.2918L7.94693 0.30133C8.34871 -0.100443 9.00186 -0.100443 9.40579 0.30133L10.6971 1.59259C11.101 1.99437 11.101 2.64752 10.6971 3.05144ZM6.10563 2.14261L0.463575 7.78464L0.00808505 10.3951C-0.0542225 10.7474 0.253018 11.0525 0.605378 10.9924L3.21585 10.5347L8.85791 4.89272C8.95889 4.79174 8.95889 4.62846 8.85791 4.52748L6.47303 2.14261C6.3699 2.04163 6.20661 2.04163 6.10563 2.14261ZM2.66583 7.30122C2.54766 7.18305 2.54766 6.99398 2.66583 6.87581L5.97457 3.56709C6.09274 3.44892 6.28181 3.44892 6.39998 3.56709C6.51815 3.68525 6.51815 3.87432 6.39998 3.99249L3.09124 7.30122C2.97307 7.41939 2.78399 7.41939 2.66583 7.30122ZM1.8902 9.10813H2.9215V9.88804L1.53569 10.1308L0.8675 9.46263L1.11028 8.07683H1.8902V9.10813Z" fill="#88CDFF" />
</svg>
)
const columns = [
  {
    title: 'Name',
    dataIndex: 'firstName',
   
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
  },
  {
    title: 'Last Login',
    dataIndex: 'lastLogin',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Operation',
   
    render: () => <a>{editicon} &nbsp; &nbsp; {deleteicon}</a>,
  }
];
const udata = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    responsive: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
    
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    responsive: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    responsive: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    responsive: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
  },
]; // rowSelection object indicates the need for row selection

const data=[
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"1"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"2"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"3"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"4"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"5"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"6"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"7"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"8"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"9"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"10"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"11"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"12"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"13"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"14"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"15"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"16"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"17"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"18"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"19"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"20"

    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"21"
    },
    {
        firstName:"First",
        lastName:"Last",
        designation:"Developer",
        lastLogin:"02 Aug 2020, 06:33",
        email:"first.last@gmail.com",
        token:"22"

    },

];


const Table1 = () => {
 
  return (
      <TableTheme>
    <div>
       <Table 
       bordered 
       columns={columns} 
       dataSource={data} 
       ellipsis={true}
       pagination={{ pageSize: 8 }} 
       rowClassName={() => 'editable-row'} />
    </div>
    </TableTheme>
  );
};

export default Table1;












