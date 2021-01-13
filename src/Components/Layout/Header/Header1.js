import React, { useState } from 'react'
import { HeaderStyle } from './HeaderStyle';
import Zeronsec_Logo from '../../../Core/Logo/Zeronsec_logo.svg';
import { Avatar, Col, Row } from 'antd';
import { Popconfirm, message } from 'antd';
import Auth from '../../../Auth';
import { useHistory } from "react-router-dom";

export default function Header1(props) {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const str = localStorage.getItem("users");
    const userName = str.toUpperCase();
    const userNameSlice = userName.slice(0, 2);
    const userNameSlice2 = userName.slice(0,1);
    const userNameSlice3 = str.slice(1);
    const showPopconfirm = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 5000);
        localStorage.removeItem("authenticated");
        localStorage.removeItem("status");
        localStorage.removeItem("token");
        const Authenticated = localStorage.getItem("authenticated")

        if (Authenticated === null) {

            Auth.logout(() => {
                history.push("/");
            });
            message.success(' You have successfully logged out')
            localStorage.removeItem("users");
        }
        else {
            return (
                message.error(' logout error !!')
            );
        };



    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    return (
        <>
            <HeaderStyle>

                <Row>
                    <Col span={20}>
                        <div className="logo-div" >
                            <img className="Header_Logo" src={Zeronsec_Logo} alt="Zeronsec" />

                        </div>
                    </Col>


                    <Col span={4} >  <div className="avatar-div" >

                        <Popconfirm
                           
                            title={"Hi, "+userNameSlice2+ userNameSlice3}
                            maskClosable={true}
                            visible={visible}
                            onConfirm={handleOk}
                            okButtonProps={{ loading: confirmLoading }}
                            onCancel={handleCancel}
                            okText="Logout"
                            placement="topRight"
                            cancelText="Cancle"
                        >

                            <Avatar style={{cursor:"pointer"}} onClick={showPopconfirm}>{userNameSlice}</Avatar>

                        </Popconfirm>

                    </div></Col>


                </Row>
            </HeaderStyle>
        </>
    )
}
