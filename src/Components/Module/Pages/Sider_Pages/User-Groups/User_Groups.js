import React from 'react'
import { UserGroupStyle } from './UserGroupStyle';
import { Button } from 'antd';
import CreateGroupModal from '../../../globalComponents/Modal/Group Modal/CreateGroupModal';


export default function User_Groups() {
    return (
        
       
        <div>
            <UserGroupStyle>

                <div >
                    
                        <div>
                            <span className='title-user'>User Groups</span>
                            <span className="create-button"><CreateGroupModal/></span>

                        </div>
                   <hr className="border-class" />
                </div>

            </UserGroupStyle>

        </div>
       
    )
}
