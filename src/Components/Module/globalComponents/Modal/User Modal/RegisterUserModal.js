import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, Modal } from "antd";
import { Row, Col } from "antd";
import InputDigit from "../../Input/InputDigit";




const RegisterUserModal = (props) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [contact, setContact] = useState("");
  // const [designation , setDesignation] = useState();
  // const [bloodgroup , setBloodgroup] = useState();
  // const [checked , setChecked]  = useState();
  // const [texed , setTexed] = useState();
  // const [password , setPassword] = useState();
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
       

          <Row> 
          <Col>
          <Form.Item
                label="Firstname"
                name="First Name"
                rules={[{ required: true, message: 'Please input your Firstname!' },{pattern:"^[a-zA-Z ]+$" , message: 'Char allowed only!' }]}
              >
                <Input/>
              </Form.Item>
          </Col>
          <Col  className="Position1">
          <Form.Item
                label="Lastname"
                name="Last Name"
                rules={[{ required: true, message: 'Please input your Lastname!'},{pattern:"^[a-zA-Z ]+$" , message: 'Char allowed only!' }]}
              >
                <Input/>
              </Form.Item>
          </Col>
          
          </Row>


          <Row>
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
                <Input/>
              </Form.Item>
            </Col>
            <Col  className="Position1">
            <Form.Item
                name="phone"
                label="Phone Number"
                hasFeedback
                rules={[{ required: true, message: 'Please input your phone number!' ,  }]}>
                <InputDigit maxLengths={10} minLengths={10} rules={[{ required: true,
                 message: 'Please input your phone number!'    }]}
                       />
                
                
                </Form.Item>
          </Col>
          </Row>

          <Row>
          <Col>
          <Form.Item name="Designation"
                label="designation">

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
            <Col   className="Position2">
            <Form.Item
                name="Blood Group"
                label="Blood Group"
                
                rules={[{ required: true, message: 'Please select your Blood Group!' }]}
                
              >
                <Select
                  style={{ width: 180 , height: 50}}
                  
                  
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
              <Radio.Group>
                <Radio value="Male" 
                >
                  Male
                </Radio>
                <Radio value="Female" 
                >
                  Female
                </Radio>

              </Radio.Group>
            </Form.Item>   
            </Row>


          <Row> <Form.Item>
              <TextArea showCount maxLength={500}  cols={400} />
            </Form.Item> </Row>
          <Row> 
          
          <Col>
          <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    pattern:"^[a-zA-Z0-9!@#$%^&*]{6,16}$" , 
                    message:'Password Should be Alpha-Numeric!' }
                ]}
                
              >
                <Input.Password />
              </Form.Item>

            </Col>

          
           <Col className="Position2">
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
                <Input.Password/>
              </Form.Item>
           </Col>
          
          
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default RegisterUserModal;