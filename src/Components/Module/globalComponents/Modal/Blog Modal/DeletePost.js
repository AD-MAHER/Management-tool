
import React , {useState} from "react";
import { Modal, Button } from "antd"
import { useDispatch } from "react-redux";
import { DeletePosts } from "../../../../../Core/Redux/Action/PostDelAction";


export default function DeletePost (props) {


        const [visible, setVisible ] = useState(false);
        const Pname = (<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.16667 4.25V0H0.875C0.390104 0 0 0.334375 0 0.75V15.25C0 15.6656 0.390104 16 0.875 16H13.125C13.6099 16 14 15.6656 14 15.25V5H9.04167C8.56042 5 8.16667 4.6625 8.16667 4.25ZM10.5 11.625C10.5 11.8312 10.3031 12 10.0625 12H3.9375C3.69687 12 3.5 11.8312 3.5 11.625V11.375C3.5 11.1688 3.69687 11 3.9375 11H10.0625C10.3031 11 10.5 11.1688 10.5 11.375V11.625ZM10.5 9.625C10.5 9.83125 10.3031 10 10.0625 10H3.9375C3.69687 10 3.5 9.83125 3.5 9.625V9.375C3.5 9.16875 3.69687 9 3.9375 9H10.0625C10.3031 9 10.5 9.16875 10.5 9.375V9.625ZM10.5 7.375V7.625C10.5 7.83125 10.3031 8 10.0625 8H3.9375C3.69687 8 3.5 7.83125 3.5 7.625V7.375C3.5 7.16875 3.69687 7 3.9375 7H10.0625C10.3031 7 10.5 7.16875 10.5 7.375ZM14 3.80938V4H9.33333V0H9.55573C9.78906 0 10.0115 0.078125 10.1755 0.21875L13.7448 3.28125C13.9089 3.42188 14 3.6125 14 3.80938Z" fill="#8FA8BA" />
        </svg>)
        const deleteicon = (<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.64286 0.687504H6.96429L6.75446 0.285746C6.71002 0.199854 6.64155 0.127604 6.55677 0.0771237C6.47198 0.0266431 6.37425 -6.50539e-05 6.27455 3.76679e-06H3.72321C3.62375 -0.000364272 3.52618 0.0262443 3.4417 0.0767811C3.35721 0.127318 3.28923 0.199738 3.24554 0.285746L3.03571 0.687504H0.357143C0.262423 0.687504 0.171582 0.72372 0.104605 0.788186C0.0376275 0.852651 0 0.940085 0 1.03125L0 1.71875C0 1.80992 0.0376275 1.89736 0.104605 1.96182C0.171582 2.02629 0.262423 2.0625 0.357143 2.0625H9.64286C9.73758 2.0625 9.82842 2.02629 9.8954 1.96182C9.96237 1.89736 10 1.80992 10 1.71875V1.03125C10 0.940085 9.96237 0.852651 9.8954 0.788186C9.82842 0.72372 9.73758 0.687504 9.64286 0.687504ZM1.1875 10.0332C1.20453 10.295 1.32459 10.5407 1.52323 10.7204C1.72186 10.9 1.98415 11 2.2567 11H7.7433C8.01585 11 8.27814 10.9 8.47677 10.7204C8.67541 10.5407 8.79547 10.295 8.8125 10.0332L9.28571 2.75H0.714286L1.1875 10.0332Z" fill="#88CDFF" />
        </svg>)
        const dispatch = useDispatch("")
     
    
        const handleCancel = () => {
            setVisible(false);
        }
    
        const handleDelete = () => {
            dispatch(DeletePosts(props.tokens))
            setVisible(false);
    
        }
    
        const showModal = () => {
            setVisible(true);
        }

        return (

            <>
                <span onClick={showModal}>
                    {deleteicon}
                </span>
                <Modal
                    centered
                    maskClosable={false}
                    visible={visible}
                    title="Delete Post"
                    onOk={handleDelete}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back"  onClick={handleDelete}>
                            Delete
            </Button>,
                        <Button key="submit" type="primary" onClick={handleCancel}>
                            Cancel
            </Button>,]}>
                    <p>Are you sure to delete this post permently ?</p>
                    <p>{Pname} {props.title}</p>

                </Modal>
            </>
        );
    }
