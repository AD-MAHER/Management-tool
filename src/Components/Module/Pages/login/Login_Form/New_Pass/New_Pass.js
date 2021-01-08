import React from 'react'
import { Input, Form } from 'antd';
import Button1 from '../../../../globalComponents/Button/Button1';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { NavLink, useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LoginPage from '../../LoginPage';


export default function New_Pass(props) {
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = () => {
    form.resetFields();

    history.push("/");

  };
  return (
    <>
      <LoginPage {...props}>


        <div className="loginClass">
          <NavLink to="/"><span><ArrowLeftOutlined className="Icon_Class" /></span></NavLink>

          <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

          <h2 className="Head2">Change Password</h2>



          <Form className="FormClass"
            form={form}
            id="changePass"
            onFinish={onFinish}>


            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },

              ]}

            >
              <Input.Password />
            </Form.Item>




            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}

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
                    return Promise.reject('passwords are not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Button1 buttonStyle="btn-success-solid" buttonSize="btn-medium1"
                className="button_css"
                type='primary'
                key="submit"
                htmlType="submit" form="changePass">Change&nbsp;Password</Button1>

       
          </Form>

        </div>

      </LoginPage>
    </>
  );
}
