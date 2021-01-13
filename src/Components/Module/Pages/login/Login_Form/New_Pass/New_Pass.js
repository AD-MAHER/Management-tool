import React, { useState } from 'react'
import { Input, Form , Button} from 'antd';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LoginPage from '../../LoginPage';
import { Change_Pass } from "../../../../../../Core/Redux/Action/NewPassAction";
import { useDispatch } from "react-redux";


export default function New_Pass(props) {

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    setLoading(true)
    dispatch(Change_Pass(values));
    setTimeout(() => {

     
      setLoading(false)
    }, 1000);
  };

   

 
  return (
    <>
      <LoginPage {...props}>


        <div className="loginClass">
          <NavLink to="/"><span><ArrowLeftOutlined className="Icon_Class" /></span></NavLink>

          <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

          <h2 className="Head2">Change Password</h2>



          <Form className="FormClass "
            form={form}
            id="changePass"
            onFinish={onFinish}>

            <Form.Item name="username" label="User Name :"
          
             rules={[

              {
                required: true,
                message: 'Please input your username',
              },
            ]} >

              <Input placeholder="Enter Your User Name" 
              style={{ width:"93%", borderRadius: "5px"}} 
               />
            </Form.Item>

            <Form.Item
              name="newpassword"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },

              ]}

            >
              <Input.Password style={{ width:"93%"}}  placeholder="Enter Your new password" />
            </Form.Item>




            <Form.Item
              name="confirmpassword"
              label="Confirm Password"
              dependencies={['newpassword']}

              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('newpassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('passwords are not match!');
                  },
                }),
              ]}
            >
              <Input.Password style={{ width:"93%"}}   placeholder="Confirm Your new password" />
            </Form.Item>

            <Button 
              // className="button_css"
              loading={loading} 
              type='primary'
              key="submit"
              htmlType="submit" form="changePass">Change&nbsp;Password</Button>
               

          </Form>

        </div>

      </LoginPage>
    </>
  );
}
