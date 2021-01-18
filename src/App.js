import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import InputPannel from "./Component/Header/InputPannel/InputPannel";
import Header from "./Component/Header/Header";
import { useReducer, useEffect } from "react";
import * as Action from "./Component/Store/Action/Action";
import reducer from "./Component/Store/Reducer/Reducer";
import List from "./Component/List/List";

function App() {
  const [state, dispatch] = useReducer(reducer, { tasks: [], keyword: "" });

  useEffect(() => {
    console.log("tasks", state.tasks);
    console.log("keyword", state.keyword);
  }, [state.tasks, state.keyword]);
  const handleValueAddInApp = (valAdd) => {
    dispatch(Action.ADDTASK(valAdd));
  };
  const handleValueSearchInApp = (valSearch) => {
    dispatch(Action.SEARCHKEY(valSearch));
  };
  const handleIdInApp = (id) => {
    dispatch(Action.STATUSID(id));
  };
  const handleCloseIdInApp = (id) => {
    dispatch(Action.CLOSEITEM(id));
  };
  const filterItemInApp = state.tasks.filter((record) => {
    return record.name.toLowerCase().includes(state.keyword.toLowerCase());
  });
  console.log(filterItemInApp, "filterItemInApp");
  return (
    <div className="App">
      <Header
        handleValAdd={handleValueAddInApp}
        handleValSearch={handleValueSearchInApp}
      />
      <List
        fiterItemForList={filterItemInApp}
        getIdFromList={handleIdInApp}
        getCloseIdFromList={handleCloseIdInApp}
      />
    </div>
  );
}

export default App;
