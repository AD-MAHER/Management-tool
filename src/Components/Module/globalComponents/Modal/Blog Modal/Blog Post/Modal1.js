// import React from 'react'
// import { Modal, Button } from 'antd';
// import {ModalStyle} from './ModalStyle.js';
// import { Form, Input, message, Upload, Select } from "antd";


    
// const { TextArea } = Input;
// const children = [];
// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

 
//  export default class Modal1 extends React.Component {
//     state = {
//         loading: false,
//         visible: false,
//       };

    
//       showModal = () => {
//         this.setState({
//           visible: true,
//         });
//       };
    
//       handleOk = () => {
//         this.setState({ loading: true });
//         setTimeout(() => {
//           this.setState({ loading: false, visible: false });
//         }, 3000);
//       };
    
//       handleCancel = () => {
//         this.setState({ visible: false });
//       };
    
//       render() {
//         const { visible, loading } = this.state;
//         return (
//           <>
//           <ModalStyle>
//             <Button type="primary" onClick={this.showModal}>
//               Create
//             </Button>
//             <Modal
//               visible={visible}
//               title="New Post"
//               onOk={this.handleOk}
//               onCancel={this.handleCancel}
//               footer={[
                
//                 <Button key="submit" type="primary" loading={loading} onClick={this.handleOk} onClick={this.handleCancel}>
//                   Create
//                 </Button>,
//               ]}
//             >
             
//              <Form
//         className=" ant-form-vertical"
//         name="basic"
//         initialValues={{
//           remember: true,
//         }}
//       >
//         <Form.Item
//           label="Post Title"
//           name="PostTitle"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Post Title!",
//             },
//           ]}
//         >
//           <Input placeholder="Enter Post Title" />
//         </Form.Item>
//         <Form.Item label="Post Cover Image">
//           <Upload>
//             <Button>Select</Button>
//           </Upload>
//         </Form.Item>
//         <Form.Item label="Post Content">
//           <TextArea
//             rows={5}
//             placeholder="Enter Post Content (This is resizable text area)"
//           />
//         </Form.Item>
//         <Form.Item label="Attachments">
//           <Upload >
//             <Button>Select</Button>
//           </Upload>
//         </Form.Item>
//         <Form.Item label="Hashtages">
//           <Select
//             mode="tags"
//             style={{ width: "100%" }}
//             placeholder="Tags Mode"
//             onChange={handleChange}
//           >
//             {this.children}
//           </Select>
//         </Form.Item>
//       </Form>
//             </Modal>
//             </ModalStyle>

//           </>
//         );
//       }
//     }



    import React from "react";
import { Form, Input, Button, message, Upload, Select } from "antd";

const Modal1 = () => {
    
  const { TextArea } = Input;
  const children = [];
  // for (let i = 10; i < 36; i++) {
  //   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  // }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <Form 
        xs sm md lg xl xxl
        className=" ant-form-vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
      >
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
        <Form.Item label="Post Cover Image">
          <Upload {...props}>
            <Button>Select</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Post Content">
          <TextArea
            rows={5}
            placeholder="Enter Post Content (This is resizable text area)"
          />
        </Form.Item>
        <Form.Item label="Attachments">
          <Upload {...props}>
            <Button>Select</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Hashtages">
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
    </>
  );
};
export default Modal1;
