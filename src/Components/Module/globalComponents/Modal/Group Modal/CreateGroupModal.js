import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, Modal } from "antd";

const CreateGroupModal = () => {
    const [groupName, setGroupName] = useState("");
    const [isChecked, setIsChecked] = useState("");
    const [selectName, setSelectName] = useState();
    
    const { Option } = Select;
   
    const Finish = (  ) => {
      
    console.log([`GroupName : ${groupName}`, `GroupType : ${isChecked}` ,` Users: ${selectName}`]);
        
        
    }
    

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
                visible={isModalVisible}
                title="New Post"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[

                <Button key="submit" type="primary" onClick={Finish} htmlType="submit"  form="CreateGroup">
                        Save
                </Button>
                ]}
            >

                <Form
                    xs sm md lg xl xxl
                    className=" ant-form-vertical"
                    id="CreateGroup"
                    name="basic"
                    initialValues={{
                        remember: true,
                      
                    }}
                    onFinish={Finish}
                   >
                    <Form.Item>
                        <span className="CreateGroupElement">Group Name</span><br /><br />

                        <Input type="text" value={groupName} onChange={(e) => { setGroupName(e.target.value) }} placeholder="Enter Group Name" />
                    </Form.Item>

                    <Form.Item>
                        <Radio.Group>
                            <Radio value="Private" checked={isChecked} onChange={(e) => { setIsChecked(e.target.value) }}>
                                Private (Readable to users outside group)
          </Radio><br />
                            <Radio value="Public" checked={isChecked} onChange={(e) => { setIsChecked(e.target.value) }}>
                                Public (Accessible to Group Users Only)
          </Radio>

                        </Radio.Group>
                    </Form.Item>



                    <Form.Item>
                        <span className="CreateGroupElement" >Group Users</span><br />
                        <Select
                            showSearch
                            mode="multiple"
                            style={{ width: 200 }}
                            placeholder="Search or Select Users"
                            optionFilterProp="children"
                           
                            value={selectName} onChange={setSelectName}
                            
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }>

                            <Option value="ajay">ajay</Option>
                            <Option value="milan">milan</Option>
                            <Option value="chirag">chirag</Option>
                            <Option value="bhavik">bhavik</Option>
                            <Option value="parth">parth</Option>
                            <Option value="nirav">nirav</Option>
                        </Select>

                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};
export default CreateGroupModal;



