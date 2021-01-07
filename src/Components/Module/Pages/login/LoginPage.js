import React from 'react'
import { Layout } from 'antd';
import { LoginStyle } from './LoginStyle';
import { Row, Col } from 'antd';
import Zeronsec_Logo from '../../../../Core/Logo/Zeronsec_logo.svg';

export default function LoginPage(props) {
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
                          
                            
                            {props.children}
                        </Col>
                    </Row>




                </Layout>
            </LoginStyle>
            
        </div>
        
        
    )
}
