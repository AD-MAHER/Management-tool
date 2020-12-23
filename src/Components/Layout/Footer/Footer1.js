import React from 'react'
import { Layout } from 'antd';
import { FooterStyle } from './FooterStyle';
const { Footer } = Layout;
const NewYear = new Date().getFullYear();
export default function Footer1() {
    return (
        <div>
            <FooterStyle>
                <Layout>
                   
                        <span className='Footer_Content'>Zeronsec India Pvt. Ltd. - {NewYear}</span>
                   
                </Layout>
            </FooterStyle>
        </div>
    )
}
