import React from 'react'
import { Layout } from 'antd';
import { ContentStyle } from './ContentStyle';



export default function Content1(props) {
    return (
        <>
            <ContentStyle>
                <Layout>
                    {props.children}
                </Layout>
            </ContentStyle>
        </>
    )
}
