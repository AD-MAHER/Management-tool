import React from 'react'
import { TaskStyle } from './TaskStyle';
import {Button }  from "antd"


export default function TaskManagement() {
    return (

        <div >
            <TaskStyle>

                <div >

                    <div>
                        <span className='title-task'>Tasks</span>
                        <span className="create-button"><Button>Create</Button></span>

                    </div>
                    <hr className="border-class" />
                </div>


              </TaskStyle>

        </div>

    )
}
