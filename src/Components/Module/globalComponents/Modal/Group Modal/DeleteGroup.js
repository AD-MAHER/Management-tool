import React, { useState } from 'react';
import { Modal, Button } from "antd"
import { useDispatch, useSelector } from "react-redux";
import { DeleteGroups } from "../../../../../Core/Redux/Action/GroupDelAction";


export default function DeleteGroup(props) {

    const grouptabledata = useSelector((state) => state.grouptable.groupData);

    const groups = (<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6.42857C4.10312 6.42857 5 5.46763 5 4.28571C5 3.10379 4.10312 2.14286 3 2.14286C1.89688 2.14286 1 3.10379 1 4.28571C1 5.46763 1.89688 6.42857 3 6.42857ZM17 6.42857C18.1031 6.42857 19 5.46763 19 4.28571C19 3.10379 18.1031 2.14286 17 2.14286C15.8969 2.14286 15 3.10379 15 4.28571C15 5.46763 15.8969 6.42857 17 6.42857ZM18 7.5H16C15.45 7.5 14.9531 7.73772 14.5906 8.12277C15.85 8.86272 16.7438 10.1987 16.9375 11.7857H19C19.5531 11.7857 20 11.3069 20 10.7143V9.64286C20 8.46094 19.1031 7.5 18 7.5ZM10 7.5C11.9344 7.5 13.5 5.82254 13.5 3.75C13.5 1.67746 11.9344 0 10 0C8.06562 0 6.5 1.67746 6.5 3.75C6.5 5.82254 8.06562 7.5 10 7.5ZM12.4 8.57143H12.1406C11.4906 8.90625 10.7688 9.10714 10 9.10714C9.23125 9.10714 8.5125 8.90625 7.85938 8.57143H7.6C5.6125 8.57143 4 10.2991 4 12.4286V13.3929C4 14.2801 4.67188 15 5.5 15H14.5C15.3281 15 16 14.2801 16 13.3929V12.4286C16 10.2991 14.3875 8.57143 12.4 8.57143ZM5.40938 8.12277C5.04688 7.73772 4.55 7.5 4 7.5H2C0.896875 7.5 0 8.46094 0 9.64286V10.7143C0 11.3069 0.446875 11.7857 1 11.7857H3.05938C3.25625 10.1987 4.15 8.86272 5.40938 8.12277Z" fill="#8FA8BA" />
    </svg>)

    const dispatch = useDispatch("")
    const [visible, setVisible] = useState(false)

    const handleCancel = () => {
        setVisible(false);
    }

    const handleDelete = () => {
        dispatch(DeleteGroups(props.tokens))
        setVisible(false);

    }

    const showModal = () => {
        setVisible(true);
    }
    const deleteicon = (<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.64286 0.687504H6.96429L6.75446 0.285746C6.71002 0.199854 6.64155 0.127604 6.55677 0.0771237C6.47198 0.0266431 6.37425 -6.50539e-05 6.27455 3.76679e-06H3.72321C3.62375 -0.000364272 3.52618 0.0262443 3.4417 0.0767811C3.35721 0.127318 3.28923 0.199738 3.24554 0.285746L3.03571 0.687504H0.357143C0.262423 0.687504 0.171582 0.72372 0.104605 0.788186C0.0376275 0.852651 0 0.940085 0 1.03125L0 1.71875C0 1.80992 0.0376275 1.89736 0.104605 1.96182C0.171582 2.02629 0.262423 2.0625 0.357143 2.0625H9.64286C9.73758 2.0625 9.82842 2.02629 9.8954 1.96182C9.96237 1.89736 10 1.80992 10 1.71875V1.03125C10 0.940085 9.96237 0.852651 9.8954 0.788186C9.82842 0.72372 9.73758 0.687504 9.64286 0.687504ZM1.1875 10.0332C1.20453 10.295 1.32459 10.5407 1.52323 10.7204C1.72186 10.9 1.98415 11 2.2567 11H7.7433C8.01585 11 8.27814 10.9 8.47677 10.7204C8.67541 10.5407 8.79547 10.295 8.8125 10.0332L9.28571 2.75H0.714286L1.1875 10.0332Z" fill="#88CDFF" />
    </svg>)
    return (
        <>
            <span onClick={showModal}>
                {deleteicon}
            </span>
            <Modal
                centered
                maskClosable={false}
                title="Delete Groups"
                visible={visible}
                onOk={handleDelete}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleDelete}>
                        Delete
            </Button>,
                    <Button key="submit" type="primary" onClick={handleCancel}>
                        Cancel
            </Button>]}>

                {grouptabledata.map((val, index) =>
                    val.token === (props.tokens) ? (
                        <span key={index}>

                            <span > {groups} &nbsp;{`${val.groupName}`}</span>
                        </span>
                    ) : null
                )}
            </Modal>
        </>
    )
}
