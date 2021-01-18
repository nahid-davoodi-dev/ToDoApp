import React, { useState } from "react";
import InputPannel from "./InputPannel/InputPannel";
import { PlusCircleOutlined, KeyOutlined } from "@ant-design/icons";
import { Card, Button, Row, Col } from "antd";

export default function Header(props) {
  let Icon;
  const [valSearch, setValSerach] = useState("");
  const [valAdd, setValAdd] = useState("");
  const handleSearchInput = (event) => {
    setValSerach(event.target.value);
  };
  const handleAddInput = (event) => {
    setValAdd(event.target.value);
  };
  const handleValAddInBtn = () => {
    props.handleValAdd(valAdd);
    setValAdd("");
  };
  const handleValSearchInBtn = () => {
    props.handleValSearch(valSearch);
  };

  return (
    <Card className="Pannel">
      <InputPannel
        firstBtnIcon={<KeyOutlined />}
        chooseIcon={(Icon = true)}
        inputPalceHolder="Search Your Task"
        innerTextBtn="Search"
        onChangeInput={handleSearchInput}
        value={valSearch}
        onClickBtn={handleValSearchInBtn}
      />
      <br />
      <InputPannel
        secondBtnTcon={<PlusCircleOutlined />}
        chooseIcon={(Icon = false)}
        inputPalceHolder="Add Your Task"
        innerTextBtn="Add"
        onChangeInput={handleAddInput}
        value={valAdd}
        onClickBtn={handleValAddInBtn}
      />
      <br />
    </Card>
  );
}
