import React, { useState , useEffect} from "react";
import { Form, Input, Button, Radio, Select, Modal} from "antd";
import { Row, Col } from "antd";
import { onlyChar, onlyDigit } from "../../ValidationArray/onlyValidation";
import { useDispatch , useSelector} from "react-redux";
import { Update_User} from "../../../../../Core/Redux/Action/UserTableAction";


const UpdateUserModal = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const updateData = useSelector((state) => state.usertable.updateData);
  const { TextArea } = Input;
  const { Option } = Select;

console.log("amd", updateData)
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(Update_User((props.tokenz),values));
   form.resetFields();
  
  setIsModalVisible(false);
  };
 // form.setFieldsValue({});

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
       {props.openButton}
      </Button>
      <span  onClick={showModal}>
       {props.openIcon}
      </span>
      <Modal
        maskClosable={false}
        visible={isModalVisible}
        title={props.ModalName}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[

          <Button key="submit" type="primary" htmlType="submit" form="CreateUser">
           {props.ModalNameButton}
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
                  name="firstName"
                  hasFeedback
                  type="text"
                  rules={[{ required: true, message: 'Please input your Firstname!' },
                  { pattern: "^[a-zA-Z ]+$", message: 'Char allowed only!' }]}
                >
                  <Input type="text" placeholder="Enter Your First Name"
                    onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} hasFeedback />
                </Form.Item>
              </Col>
              <Col className="Position1">
                <Form.Item
                  label="Lastname"
                  hasFeedback
                  name="lastName"
                  rules={[{ required: true, message: 'Please input your Lastname!' }, { pattern: "^[a-zA-Z ]+$", message: 'Char allowed only!' }]}
                >
                  <Input type="text" placeholder="Enter Your Last Name" 
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
                  <Input placeholder="Enter Your Email Address" />
                </Form.Item>
              </Col>
              <Col className="Position1">

                <Form.Item name="contact"
                  label="Contact" 
                  onKeyDown={e => symbolsArr2.includes(e.key) && e.preventDefault()}
                 
                  rules={[{ required: true, message: 'Please input your contact!', }]}>
                  <Input  hasFeedback
                    autoComplete="off" 
                    placeholder="Enter Your Contact Number"
                    maxLength={10} minLength={10} />
                </Form.Item>

              </Col>
            </Row>

            <Row className="UserFormMargin">
              <Col>
                <Form.Item name="designation"
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
                  name="bloodGroup"
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
            <Row><Col>
            <Form.Item
              name="gender"
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
            </Col>


            <Col>
            <Form.Item name="username" label="User Name :" rules={[

{
  required: true,
  message: 'Please input your username',
},
]} >

<Input placeholder="Enter Your User Name" />
</Form.Item>

            </Col>
            </Row>


            <Row> 
            <Form.Item  
            name="address"
            label="Address" hasFeedback
             rules={[{ required: true, message: 'Please enter your Address!' }]} >
              <TextArea showCount
             placeholder="Enter Your Address"
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
                  <Input.Password   placeholder="Enter Your Password"/>
                </Form.Item>

              </Col>


              <Col className="Position3">
                <Form.Item
                  name="confirmPassword"
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
                  <Input.Password placeholder="Confirm Your Password" />
                </Form.Item>
              </Col>


            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default UpdateUserModal;