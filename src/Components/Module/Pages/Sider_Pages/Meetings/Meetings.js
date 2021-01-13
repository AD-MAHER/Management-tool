import React from 'react'
import { MeetingStyle} from './MeetingStyle';
import {Button }  from "antd"


export default function Users() {
    return (

        <div >
            <MeetingStyle>

                <div >

                    <div>
                        <span className='title-meeting'>Meetings</span>
                        <span className="create-button"><Button>Create</Button></span>

                    </div>
                    <hr className="border-class" />
                </div>


              </MeetingStyle>

        </div>

    )
}
