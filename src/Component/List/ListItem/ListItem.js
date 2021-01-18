import React from "react";
import { Card, Button, Row, Col } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function ListItem(props) {
  const classGenerator = (complete) => {
    switch (complete) {
      case "start":
        return "startCard";
      case "doing":
        return "doingCard";
      case "done":
        return "doneCard";
      default:
        return "";
    }
  };
  return (
    <>
      <Card
        className={classGenerator(props.item.complete)}
        title={props.item.name}
        type="inner"
        extra={<Button  onClick={()=>{return props.closeItemInList(props.item.id)}} type="link" icon={<CloseCircleOutlined />}></Button>}
      >
        {props.item.complete === "start" ? (
          <li
            onClick={() => {
              return props.handleIdInList(props.item.id);
            }}
          >
            Start
          </li>
        ) : (
          <div>
            {props.item.complete === "doing" ? (
              <li
                onClick={() => {
                  return props.handleIdInList(props.item.id);
                }}
              >
                Doing{" "}
              </li>
            ) : (
              <li
                onClick={() => {
                  return props.handleIdInList(props.item.id);
                }}
              >
                Done
              </li>
            )}
          </div>
        )}
      </Card>
    </>
  );
}
