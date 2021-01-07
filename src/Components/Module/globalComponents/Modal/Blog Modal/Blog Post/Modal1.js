import React, { useState } from "react";
import { Form, Input, Button, message, Upload, Select, Modal } from "antd";
import { Row } from "antd";
const Modal1 = () => {

  const { TextArea } = Input;
  const children = [];


  function handleChange(value) {

    // console.log(` ${value}`  );
  }

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList ,);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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

  const FinishValue = values => {
    console.log(values)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create
           </Button>
      <Modal
        maskClosable={false}
        visible={isModalVisible}
        title="New Post"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[

          <Button key="submit" type="primary" onClick={handleOk} htmlType="submit" form="CreatePost" >
            Save
                </Button>,
        ]}
      >

        <Form
          xs sm md lg xl xxl
          id='CreatePost'
          className=" ant-form-vertical"
          name="basic"
          onFinish={FinishValue}
          initialValues={{
            remember: true,
          }}
        >
          <Row>
            <Form.Item
              label="Post Title"
              name="PostTitle"
              rules={[
                {
                  required: true,
                  message: "Please input your Post Title!",
                },
              ]}
            >
              <Input placeholder="Enter Post Title" />
            </Form.Item>
          </Row>
          <Row style={{display:"inline-block"}}>
            <Form.Item label="Post Cover Image"
              name="Image"
              rules={[
                {
                  required: true,
                  message: "Please select Cover Photo!",
                },
              ]}>
              <Upload {...props}>
                <Button>Select</Button>
              

              </Upload>


            </Form.Item>
          </Row>


          <Form.Item label="Post Content"
            name="Content"
            rules={[
              {
                required: true,
                message: "Please Add some Description!",
              },
            ]}>
            <TextArea
              rows={5}
              placeholder="Enter Post Content (This is resizable text area)"
            />
          </Form.Item>
          <Form.Item label="Attachments"
            name="File"
            rules={[
              {
                required: true,
                message: "Please Attach Some File!",
              },
            ]}>
            <Upload {...props}>
              <Button>Select</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Hashtages"
            name="hashtags"
            rules={[{ required: true, message: 'Missing area' }]}>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Tags Mode"
              onChange={handleChange}
            >
              {children}
            </Select>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};
export default Modal1;