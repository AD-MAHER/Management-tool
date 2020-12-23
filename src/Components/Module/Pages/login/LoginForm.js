import React from 'react'
import Form from 'antd/lib/form/Form';
import { Input } from 'antd';
import Input1 from '../../globalComponents/FormComp/Input1';
import Button1 from '../../globalComponents/Button/Button1';
import Zeronsec_Logo from "../../../../Core/Logo/Zeronsec_logo.svg"
import {NavLink} from "react-router-dom";
export default function LoginForm() {
    return (
        <div className="loginClass">

            <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />
            <h3 className="Head1">Welcome back</h3>
            <h2 className="Head2">Login to your account</h2>
            <Form className="FormClass">

                <Input1 className="uni_margin" name="email" label=" Email" rules={[{ required: true, message: 'Email' },
                { type: 'email', message: 'Please enter in this form "abc@xyz.123"' },
                ]} input={<Input />} />

                <Input1  name="Password" label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    input={<Input />} />
                <div className="Forgot"><NavLink className='F1' to="/req_otp">Forgot Password?</NavLink></div>
                <br />
                <NavLink to="/layout_1" >
                <Button1 buttonStyle="btn-success-solid" buttonSize="btn-medium"
                    className="button_css"
                    type='button'>Login_Now</Button1>
                    </NavLink>

            </Form>

        </div>
    )
}
