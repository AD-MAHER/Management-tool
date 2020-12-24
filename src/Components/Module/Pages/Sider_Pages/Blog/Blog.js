import React from 'react'
import { BlogStyle } from './BlogStyle';
import { Button } from 'antd';
import Blog_Post from '../../../../../Core/Data/Blog_Post';
import Layout1 from '../../../../Layout/Layout1';

export default function Users(props) {
    return (
        <Layout1 {...props}>
            <div>
                <BlogStyle>

                    <div >

                        <div>
 <span className='title-user'>Blog Posts</span>
 <span className="create-button">  <Button type="primary">Create</Button></span>

                        </div>
                        <hr className="border-class" />
                    </div>

                    <div>



                    </div>
                </BlogStyle>

            </div>
        </Layout1>
    )
}
