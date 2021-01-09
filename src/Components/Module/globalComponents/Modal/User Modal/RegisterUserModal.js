import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, Modal} from "antd";
import { Row, Col } from "antd";
import { onlyChar, onlyDigit } from "../../ValidationArray/onlyValidation";



const RegisterUserModal = (props) => {
  const [form] = Form.useForm();


  const { TextArea } = Input;
  const { Option } = Select;


  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
    setIsModalVisible(false);
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

  const [symbolsArr] = useState(onlyChar);
  const [symbolsArr2] = useState(onlyDigit);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create
      </Button>
      <Modal
        maskClosable={false}
        visible={isModalVisible}
        title="Add User"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[

          <Button key="submit" type="primary" htmlType="submit" form="CreateUser">
            Save
                </Button>
        ]}
      >
        <div className="UserForm">
          <Form
            xs sm md lg xl xxl
            className=" ant-form-vertical"
            id="CreateUser"
            name="basic"
            form={form}
            initialValues={{
              remember: true,

            }}
            onFinish={onFinish}
          >


            <Row className="UserFormMargin">
              <Col>
                <Form.Item
                  label="Firstname"
                  name="First Name"
                  hasFeedback
                  type="text"
                  rules={[{ required: true, message: 'Please input your Firstname!' },
                  { pattern: "^[a-zA-Z ]+$", message: 'Char allowed only!' }]}
                >
                  <Input type="text"
                    onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} hasFeedback />
                </Form.Item>
              </Col>
              <Col className="Position1">
                <Form.Item
                  label="Lastname"
                  hasFeedback
                  name="Last Name"
                  rules={[{ required: true, message: 'Please input your Lastname!' }, { pattern: "^[a-zA-Z ]+$", message: 'Char allowed only!' }]}
                >
                  <Input type="text"
                    onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} hasFeedback/>
                </Form.Item>
              </Col>

            </Row>


            <Row className="UserFormMargin"> 
              <Col>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col className="Position1">

                <Form.Item name="phone"
                  label="Phone Number"
                  onKeyDown={e => symbolsArr2.includes(e.key) && e.preventDefault()}
                  hasFeedback
                  rules={[{ required: true, message: 'Please input your phone number!', }]}>
                  <Input
                    autoComplete="off"
                    maxLength={10} minLength={10} hasFeedback />
                </Form.Item>

              </Col>
            </Row>

            <Row className="UserFormMargin">
              <Col>
                <Form.Item name="Designation"
                  label="designation"
                  rules={[{ required: true, message: 'Please select your Designation!' }]}>

                  <Select
                    style={{ width: 180 }}

                    showSearch
                    rules={[{ required: true, message: 'Please select your Designation!' }]}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }>
                    <Option value="Employee">Employee</Option>
                    <Option value="Trainee">Trainee</Option>
                    <Option value="Frontend">Frontend</Option>
                    <Option value="Interns">Interns</Option>
                    <Option value="Backend">Backend</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col className="Position4">
                <Form.Item
                  name="Blood Group"
                  label="Blood Group"

                  rules={[{ required: true, message: 'Please select your Blood Group!' }]}

                >
                  <Select
                    style={{ width: 180, height: 50 }}


                    showSearch
                    rules={[{ required: true, message: 'Please select your Blood Group!' }]}
                    placeholder="Type or select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }>
                    <Option value="A+">A+</Option>
                    <Option value="A-">A-</Option>
                    <Option value="B+">B+</Option>
                    <Option value="B-">B-</Option>
                    <Option value="O+">O+</Option>
                    <Option value="O-">O-</Option>
                    <Option value="AB+">AB+</Option>
                    <Option value="AB-">AB-</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row><Form.Item
              name="Gender"
              label="Gender"
                        
              rules={[{ required: true, message: 'Please select your Gender!' }]}
            >
              <Radio.Group hasFeedback>
                <Radio hasFeedback  value="Male"
                >
                  Male
                </Radio>
                <Radio  hasFeedback value="Female"
                >
                  Female
                </Radio>

              </Radio.Group>
            </Form.Item>
            </Row>


            <Row className="UserFormMargin"> 
            <Form.Item  
            name="Address"
            label="Address" hasFeedback
             rules={[{ required: true, message: 'Please enter your Address!' }]} >
              <TextArea showCount
            
                maxLength={500}
                cols={400}
                rules={[{ required: true, message: 'Please enter your Address!' }]}
                autoSize={{ minRows: 3, maxRows: 3 }} />
            </Form.Item> 
            </Row>
            <Row className="UserFormMargin">

              <Col>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                   
                  ]}

                >
                  <Input.Password />
                </Form.Item>

              </Col>


              <Col className="Position3">
                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={['password']}

                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('passwords are not match!');
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>


            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default RegisterUserModal;