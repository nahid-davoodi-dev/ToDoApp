import React from "react";
// import { PoweroffOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";

import { Input, Button, Row, Col } from "antd";

export default function InputPannel(props) {
  return (
    <Row justify="space-around">
      <Col      sm ={24} md={16} lg={16} xl={16} xxl ={16}style={{ display: "flex" }} className="icons-list">
        <Input
          placeholder={props.inputPalceHolder}
          value={props.value}
          onChange={props.onChangeInput}
        />
        <Button
          type="primary"
          icon={props.chooseIcon ? props.firstBtnIcon : props.secondBtnTcon}
          onClick={props.onClickBtn}
          style={{ width: 110 }}
        >
          {props.innerTextBtn}
        </Button>
      </Col>
    </Row>
  );
}
