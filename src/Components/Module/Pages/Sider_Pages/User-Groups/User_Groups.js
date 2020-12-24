import React from 'react'
import { UserGroupStyle } from './UserGroupStyle';
import { Button } from 'antd';
import Layout1 from '../../../../Layout/Layout1';


export default function User_Groups(props) {
    return (
        <Layout1 {...props}>
       
        <div>
            <UserGroupStyle>

                <div >
                    
                        <div>
                            <span className='title-user'>User Groups</span>
                            <span className="create-button">  <Button type="primary">Create</Button></span>

                        </div>
                   <hr className="border-class" />
                </div>

            </UserGroupStyle>

        </div>
        </Layout1>
    )
}
