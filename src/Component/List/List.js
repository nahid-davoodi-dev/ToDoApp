import React from "react";
import ListItem from "./ListItem/ListItem";

export default function List(props) {
  const sendIdInApp = (id) => {
    props.getIdFromList(id);
  };
  const sendCloseIdInApp = (id) => {
    props.getCloseIdFromList(id);
  };
  return (
    <ul>
      {props.fiterItemForList.map((record) => {
        return (
          <ListItem
            key={record.id}
            item={record}
            handleIdInList={sendIdInApp}
            closeItemInList={sendCloseIdInApp}
          />
        );
      })}
    </ul>
  );
}
