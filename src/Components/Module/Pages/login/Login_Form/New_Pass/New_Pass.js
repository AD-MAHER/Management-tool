import React from 'react'
import { NewPassStyle } from './NewPassStyle';
import { Input, Form } from 'antd';
import Button1 from '../../../../globalComponents/Button/Button1';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { NavLink } from "react-router-dom";
import {ArrowLeftOutlined} from '@ant-design/icons';
export default function New_Pass() {
  return (
    <>

      <NewPassStyle>
     
        <div className="loginClass">
        <NavLink to="/"><span><ArrowLeftOutlined className="Icon_Class"/></span></NavLink>
        
          <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

          <h2 className="Head2">Change Password</h2>



          <Form className="FormClass">

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <NavLink to="/">
              <Button1 buttonStyle="btn-success-solid" buttonSize="btn-medium"
                className="button_css"
                type='button'><span>Change Password</span></Button1>

            </NavLink>
          </Form>

        </div>
      </NewPassStyle>
    </>
  );
}
