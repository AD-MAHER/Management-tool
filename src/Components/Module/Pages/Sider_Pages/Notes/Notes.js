import React from 'react'
import { NoteStyle} from './NotesStyle';
import {Button }  from "antd"


export default function Users() {
    return (

        <div >
            <NoteStyle>

                <div >

                    <div>
                        <span className='title-notes'>Notes</span>
                        <span className="create-button"><Button>Create</Button></span>

                    </div>
                    <hr className="border-class" />
                </div>


              </NoteStyle>

        </div>

    )
}
