import actionTypes from "../ActionTypes/ActionType";

//  import actionTypes from '../ActionTypes/ActionType'

export const ADDTASK = (val) => {
  const action = { type: actionTypes.ADDTASK, payload: val };
  return action;
};
export const SEARCHKEY = (val) => {
  const action = { type: actionTypes.SEARCHKEY, payload: val };
  return action;
};
export const STATUSID = (val) => {
  const action = { type: actionTypes.CHANGESTATUS, payload: val };
  return action;
};
export const CLOSEITEM = (val) => {
  const action = { type: actionTypes.DELETEITEM, payload: val };
  return action;
};
