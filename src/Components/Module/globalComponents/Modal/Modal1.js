import React from 'react'
import { Modal, Button } from 'antd';
import {ModalStyle} from './ModalStyle.js';
import { Input , Form , Upload} from 'antd';
 export default class Modal1 extends React.Component {
    state = {
        loading: false,
        visible: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    
      render() {
        const { visible, loading } = this.state;
        return (
          <>
          <ModalStyle>
            <Button type="primary" onClick={this.showModal}>
              Create
            </Button>
            <Modal
              visible={visible}
              title="New Post"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk} onClick={this.handleCancel}>
                  Create
                </Button>,
              ]}
            >
             
              <Form>
              <p>Post title</p>
              <Input placeholder="Post Title" />

              <Upload name="logo" action="/upload.do" listType="picture">
          <Button >Select</Button>
        </Upload>
              </Form>
            </Modal>
            </ModalStyle>

          </>
        );
      }
    }
