import React from 'react'
import Form from 'antd/lib/form/Form';
import { Input } from 'antd';
import Input1 from '../../../../globalComponents/FormComp/Input1';
import Button1 from '../../../../globalComponents/Button/Button1';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import {NavLink} from "react-router-dom";
import {ArrowLeftOutlined} from '@ant-design/icons';
import LoginPage from '../../LoginPage';
export default function Verify_OTP(props) {
    return (
        <>
<LoginPage {...props}>        
            <div className="loginClass">
            <NavLink to="/"><span><ArrowLeftOutlined  className="Icon_Class"/></span></NavLink> 
                <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

                <h2 className="Head2">Verify OTP</h2>

                <h3 className="Head1">Enter Your 6digit OTP via mail.</h3>

                <Form className="FormClass">

                    <Input1  name="Enter OTP" label="Enter OTP" rules={[{ required: true, message: 'OTP' }
                   
                    ]} input={<Input />} />

                        <NavLink to="/new_pass">
                    <Button1 buttonStyle="btn-success-solid" buttonSize="btn-medium"
                        className="button_css"
                        type='button'><span>Verify OTP</span></Button1></NavLink>


                </Form>

            </div>
</LoginPage>   
        </>
    );
}
