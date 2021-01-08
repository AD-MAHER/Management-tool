import React, {useState} from 'react'
import { HeaderStyle } from './HeaderStyle';
import Zeronsec_Logo from '../../../Core/Logo/Zeronsec_logo.svg';
import { Avatar, Col, Row } from 'antd';
import { Popconfirm } from 'antd';
import Auth from '../../../Auth';
import { useHistory } from "react-router-dom";

export default function Header1(props) {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showPopconfirm = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 5000);
        Auth.logout(() => {
            history.push("/");
        });


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
                            title="Are you sure to logout？"
                            maskClosable={true}
                            visible={visible}
                            onConfirm={handleOk}
                            okButtonProps={{ loading: confirmLoading }}
                            onCancel={handleCancel}
                            okText="Logout"
                            placement="topRight"
                            cancelText="Cancle"
                        >

                            <Avatar onClick={showPopconfirm}>AD</Avatar>

                        </Popconfirm>

                    </div></Col>


                </Row>
            </HeaderStyle>
        </>
    )
}
