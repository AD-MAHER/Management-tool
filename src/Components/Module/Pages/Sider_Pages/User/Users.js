import React from 'react'
import { UserStyle } from './UserStyle';
import { Button } from 'antd';

export default function Users() {
    return (
        <div>
            <UserStyle>

                <div >
                    
                        <div>
                            <span className='title-user'>Users</span>
                            <span className="create-button">  <Button type="primary">Create</Button></span>

                        </div>
                   <hr className="border-class" />
                </div>

            </UserStyle>

        </div>
    )
}
