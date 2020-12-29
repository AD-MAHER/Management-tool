import React , {useState} from 'react'
import {Row, Col, Modal, Button } from 'antd';

function InfoModal (props) {
 
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
      <>
        <Button type="primary" onClick={showModal}>
        {props.infoName}
        </Button>
        <Modal

          visible={isModalVisible}
          title="Title"
          onOk={handleOk}  width={1000}
          onCancel={handleCancel}
          footer={[
           
          ]}
        >


    <Row>
      <Col span={12}><img alt="example" src={props.infoImg} /></Col>
      <Col span={12}><div>
          <span>Created On :</span><br/>
            <span>{props.time}</span>
            <span>Title </span><br/>
            <span>{props.title}</span>
      </div></Col>
    </Row>
    <Row>
      <Col span={24}><p>Some contents...</p></Col>
    </Row>
          
          
        </Modal>
      </>
    );
  }

export default InfoModal;