import React from "react";
import { Form } from "antd";
const Input1 = (props) => {

  return (
    <>
      <Form.Item
        name={props.name}
        label={props.label}
        hasFeedback
        rules={props.rules}
      >
        {props.input}
      </Form.Item>
    </>
  );
};
export default Input1;