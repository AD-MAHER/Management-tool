import React from 'react'
import { UserStyle } from './UserStyle';
import RegisterUserModal from '../../../globalComponents/Modal/User Modal/RegisterUserModal';
import Table1 from '../../../../Table/Table1';

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


                <div >
                    <Table1 />
                </div>
            </UserStyle>

        </div>

    )
}
