import React from 'react'
import { Layout } from 'antd';
import { LoginStyle } from './LoginStyle';
import { Row, Col } from 'antd';
import Zeronsec_Logo from '../../../../Core/Logo/Zeronsec_logo.svg';
import LoginForm from './LoginForm';
import Forgot_Password from './Login_Form/Forgot_Pass/Forgot_Password';
import Verify_OTP from './Login_Form/Request_OTP/Verify_OTP';
import NewPass from './Login_Form/New_Pass/New_Pass';
import { Switch, Route } from 'react-router-dom';
export default function LoginPage() {
    return (
        <div>
            <LoginStyle>
                <Layout>


                    <Row >
                        <Col span={12} className="left_div">
                            <div className="MainClass">
                                <img className="Logo1" src={Zeronsec_Logo} alt="Zeronsec" />

                                <p>
                                    We are Zeronsec, team of passionate security engineer and industry
                                    veterans spread across the globe, specializing in niche information security
                                    areas. We exist to protect our customers,
                        </p>
                                <p>
                                    Our obsession to engineer robust & meaningful solutions drives us forward
                                    everyday. We are company where passion meets details engineering.
                        </p>
                            </div>
                        </Col>

                        <Col span={12} className="right_div">
                          
                            <Switch >

                                <Route path='/' exact component={LoginForm} />
                                <Route path='/forgot_pass' component={Forgot_Password} />
                                <Route path='/req_OTP' component={Verify_OTP} />
                                <Route path='/verify_OTP' component={NewPass} />
                                <Route path='/' component={LoginForm} />


                            </Switch>

                        </Col>
                    </Row>




                </Layout>
            </LoginStyle>
        </div>
    )
}
