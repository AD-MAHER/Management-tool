import React, { useState } from 'react'
import { Form , Button } from 'antd';
import { Input } from 'antd';
import Zeronsec_Logo from "../../../../Core/Logo/Zeronsec_logo.svg"
import LoginPage from './LoginPage';
import Auth from "../../../../Auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Login_Verification } from "../../../../Core/Redux/Action/LoggAction";

export default function LoginForm(props) {
  const history = useHistory();
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
   
  const onFinish = (values , e) => {
    
    console.log(values);
  
    setLoading(true)
    dispatch(Login_Verification(values));
    setTimeout(() => {

     
      setLoading(false)
    }, 1000);
  };



  return (
    <LoginPage  {...props}>
      <div className="loginClass">



        <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />


        <h3 className="Head1">Welcome back</h3>


        <h2 className="Head2">Login to your account</h2>


        <Form
          className="FormClass"
          form={form}
          id="loginnow"
          onFinish={onFinish}

        >

          <Form.Item name="username" label="User Name :" rules={[

            {
              required: true,
              message: 'Please input your username',
            },
          ]} >

            <Input placeholder="Enter Your User Name" />
          </Form.Item>




          <Form.Item className="logpass" name="password" label="Password :"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },

            ]} >

            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>
          <div style={{ width: "50%", display: "flex" }}>

            <span className='F1'
              style={{ cursor: "pointer" }}
              onClick={() => {
                Auth.loginProcess(() => {
                  history.push("/req_otp");
                });
              }}>
              Forgot&nbsp;Password?
        </span>


          </div>

          <Button 
          
          type='primary'
            key="submit"
            htmlType="submit" form="loginnow" 
            loading={loading} 
            
          >Login&nbsp;Now</Button>


        </Form>


      </div>
    </LoginPage>
  )
}
