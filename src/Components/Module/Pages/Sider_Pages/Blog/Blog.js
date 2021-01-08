import React, {useState} from 'react'
import { BlogStyle } from './BlogStyle';
import amd from '../../../../../Core/Images & Icons/img1.png';
import { Row, Card, Tooltip } from 'antd';
import Modal1 from '../../../globalComponents/Modal/Blog Modal/Blog Post/Modal1';
import DeletePost from "../../../globalComponents/Modal/Blog Modal/DeletePost";
import { useSelector } from "react-redux";
import { Col, Modal, Tag  } from 'antd';
const { Meta } = Card;


export default function Blog() {
    const post = useSelector((state) => state.blogpost.posts);
    
    const authicon = (<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 0C2.90927 0 0 2.68548 0 6C0 9.31452 2.90927 12 6.5 12C10.0907 12 13 9.31452 13 6C13 2.68548 10.0907 0 6.5 0ZM6.5 2.32258C7.77379 2.32258 8.80645 3.27581 8.80645 4.45161C8.80645 5.62742 7.77379 6.58065 6.5 6.58065C5.22621 6.58065 4.19355 5.62742 4.19355 4.45161C4.19355 3.27581 5.22621 2.32258 6.5 2.32258ZM6.5 10.6452C4.96149 10.6452 3.58286 10.0016 2.66028 8.99516C3.15302 8.13871 4.11754 7.54839 5.24194 7.54839C5.30484 7.54839 5.36774 7.55806 5.42802 7.575C5.76875 7.67661 6.1252 7.74194 6.5 7.74194C6.8748 7.74194 7.23387 7.67661 7.57198 7.575C7.63226 7.55806 7.69516 7.54839 7.75806 7.54839C8.88246 7.54839 9.84698 8.13871 10.3397 8.99516C9.41714 10.0016 8.03851 10.6452 6.5 10.6452Z" fill="#88CDFF" />
    </svg>)



    const editicon = (<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6971 3.05144L9.70658 4.04191C9.6056 4.14289 9.44231 4.14289 9.34133 4.04191L6.95645 1.65705C6.85547 1.55607 6.85547 1.39278 6.95645 1.2918L7.94693 0.30133C8.34871 -0.100443 9.00186 -0.100443 9.40579 0.30133L10.6971 1.59259C11.101 1.99437 11.101 2.64752 10.6971 3.05144ZM6.10563 2.14261L0.463575 7.78464L0.00808505 10.3951C-0.0542225 10.7474 0.253018 11.0525 0.605378 10.9924L3.21585 10.5347L8.85791 4.89272C8.95889 4.79174 8.95889 4.62846 8.85791 4.52748L6.47303 2.14261C6.3699 2.04163 6.20661 2.04163 6.10563 2.14261ZM2.66583 7.30122C2.54766 7.18305 2.54766 6.99398 2.66583 6.87581L5.97457 3.56709C6.09274 3.44892 6.28181 3.44892 6.39998 3.56709C6.51815 3.68525 6.51815 3.87432 6.39998 3.99249L3.09124 7.30122C2.97307 7.41939 2.78399 7.41939 2.66583 7.30122ZM1.8902 9.10813H2.9215V9.88804L1.53569 10.1308L0.8675 9.46263L1.11028 8.07683H1.8902V9.10813Z" fill="#88CDFF" />
    </svg>
    )
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);

    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);


    };

                               
   
   
    return (

        <div >
            <BlogStyle>
            
                <div >

                    <div >
                        <span className='title-user'>Blog Posts 
                       
                        </span>
                        <span className="create-button"><Modal1 /></span>

                    </div>
                    <hr className="border-class" />
                </div>

                <div style={{ overflowY: "scroll" }} className="scrollClass">

                    <Row>
                        {post.map((i, index) => {
                           



                            return (
                                <>
                                
                                
                                <Tooltip key={index} placement="bottomRight" title={i.title}>
                                    <Card key={index}
                                            
                                        cover={<img alt="example" src={amd} onClick={showModal}/>}
                                        token={i.token}
                                    >
                                     
                                        <Meta title={i.title} description={i.createdTime} onClick={showModal}/>
                                        <span className="auther-class">{authicon} {i.author}</span>


                                        <span className="icon-class data-class" >{editicon} &nbsp; &nbsp;
                                        <DeletePost title={i.title} tokens={i.token}/></span>

                                    </Card>
                                </Tooltip>

        <Modal
       
        centered
                    maskClosable={false}
                    width={800}
                    title="View Post"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={false}
                  >
                    <div className="ModalContent">
                      <div className="postheader">
                        <span>{i.title} for view</span>
                      </div>
                      <Row>
                        <Col md={12 } xs={24 } >
                          <div className="postPhoto">
                            <img width="340" className="img1" src={amd} alt="img" />
                            <img width="240" className="img2" src={amd} alt="img" />
                          </div>
                        </Col>
                        <Col md={12 } xs={24 }>
                          <div className="PostRdata">
                            <span className="PostHeading">Created On:</span>
                            <p>{i.createdTime}</p>
                            <span className="PostHeading">Auther:</span>
                            <p className="PostAuther">{i.author}</p>
                            <span className="PostHeading">HashTags:</span>
                            <p>{i.hashtags}</p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                      <div className="PostDesc">
                        <p>{i.description}</p>
                        <p>
                          This is sample post created for design make sure if
                          content is bigger then scroll will be automatically
                          generated This is sample post created for design make
                          sure if content is bigger then scroll will be
                          automatically generated This is sample post created
                          for design make sure if content is bigger then scroll
                          will be automatically generated.
                        </p>
                      </div>
                      <div>
                        <span className="detailheading">Attachments:</span>
                        <p>
                          <Tag>
                            attachment1_post123
                          </Tag>
                        </p>
                      </div>
                      </Row>
                    </div>
                  </Modal>
                                
                                </>

                            )
                        })}

                    </Row>
                </div>

            </BlogStyle>

        

        </div>

    )
}
