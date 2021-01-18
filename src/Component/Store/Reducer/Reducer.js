import ActionButton from "antd/lib/modal/ActionButton";
import React from "react";
import actionTypes from "../ActionTypes/ActionType";
const INIT_STATE = { tasks: [], keyword: "" };

export default function reducer(state = INIT_STATE, dispatch) {
  switch (dispatch.type) {
    case actionTypes.ADDTASK:
      const newArrTasks = [...state.tasks];
      let finalArr = newArrTasks;
      const indexAdd = newArrTasks.findIndex((record) => {
        return record.name === dispatch.payload;
      });
      console.log(indexAdd);
      if (indexAdd === -1 && dispatch.payload !== "") {
        const newTask = {
          id: Math.random(),
          complete: "start",
          name: dispatch.payload,
        };
        finalArr = [...newArrTasks, newTask];
      }
      //    else  {return}

      return { ...state, tasks: finalArr };
    case actionTypes.SEARCHKEY:
      return { ...state, keyword: dispatch.payload };
    case actionTypes.CHANGESTATUS:
      const changeArr = [...state.tasks];
      const indexChange = changeArr.findIndex((record) => {
        return record.id === dispatch.payload;
      });
      const findTask = { ...changeArr[indexChange] };
      if (findTask.complete === "start") {
        findTask.complete = "doing";
      } else if (findTask.complete === "doing") {
        findTask.complete = "done";
      } else if (findTask.complete === "done") {
        findTask.complete = "start";
      }
      const finalStatus = [
        ...changeArr.slice(0, indexChange),
        findTask,
        ...changeArr.slice(indexChange + 1),
      ];
      return { ...state, tasks: finalStatus };
    case actionTypes.DELETEITEM:
      const deleteArr = [...state.tasks];
      const indexDelete = deleteArr.findIndex((record) => {
        return record.id === dispatch.payload;
      });
      // const deleteTask={...deleteArr[indexDelete]}
      deleteArr.splice(indexDelete, 1);
      console.log(deleteArr,"deleteArr")
      return { ...state, tasks: deleteArr };
    default:
      return state;
  }
}
