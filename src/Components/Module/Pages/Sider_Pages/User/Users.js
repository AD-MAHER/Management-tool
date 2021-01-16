import React from 'react'
import { UserStyle } from './UserStyle';
import RegisterUserModal from '../../../globalComponents/Modal/User Modal/RegisterUserModal';
import UserTable from '../../../../Table/UserTable';

export default function Users() {
    return (

        <div >
            <UserStyle>

                <div >

                    <div>
                        <span className='title-user'>Users</span>
                        <span className="create-button"><RegisterUserModal openButton="Create" 
                           ModalNameButton="Save" ModalName="Register User"/></span>

                    </div>
                    <hr className="border-class" />
                </div>


                <div >
                    <UserTable />
                </div>
            </UserStyle>

        </div>

    )
}
