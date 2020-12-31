import React from 'react'
import { UserStyle } from './UserStyle';
import { Button } from 'antd';
import Layout1 from '../../../../Layout/Layout1';
import RegisterUserModal from '../../../globalComponents/Modal/User Modal/RegisterUserModal';

export default function Users() {
    return (
       
        <div>
            <UserStyle>

                <div >
                    
                        <div>
                            <span className='title-user'>Users</span>
                            <span className="create-button"><RegisterUserModal /></span>

                        </div>
                   <hr className="border-class" />
                </div>

            </UserStyle>

        </div>
        
    )
}
