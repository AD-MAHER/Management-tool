import React from 'react'
import { Layout } from 'antd';
import { FooterStyle } from './FooterStyle';

const NewYear = new Date().getFullYear();
export default function Footer1() {
    return (
        <>
            <FooterStyle>

                <div className='Footer_Content'>Zeronsec India Pvt. Ltd. - {NewYear}
                </div>

            </FooterStyle>
        </>
    )
}
