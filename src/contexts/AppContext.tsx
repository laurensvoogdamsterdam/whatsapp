import createDataContext from "./createDataContext";
import { Action } from "../types";
import { getItem, StorageKeys } from "./storage";

// Initial State
const initialState: object = {
  user: null,
};

// Action types
enum ActionTypes {
  SIGNIN = "SIGNIN",
  SIGNUP = "SIGNUP",
  SIGNOUT = "SIGNOUT",
  FORGOTPASSWORD = "FORGOTPASSWORD",
  RESETPASSWORD = "RESETPASSWORD",
  SET_USER = "SET_USER",
}

// Reducers
const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case ActionTypes.SIGNIN:
      return state;
    case ActionTypes.SIGNOUT:
      return state;
    case ActionTypes.SIGNUP:
      return state;
    case ActionTypes.FORGOTPASSWORD:
      return state;
    case ActionTypes.RESETPASSWORD:
      return state;
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

//  Actions
const signin = (dispatch: any) => {
  return (email: string, password: string) => {
    console.log(`Sign up ${email} ${password}`);
  };
};

const signout = () => {};
const signup = () => {};
const forgotPassword = () => {};
const resetPassword = () => {};
const setUser = (dispatch: any) => {
  return (user: object) => {
    dispatch({
      type: ActionTypes.SET_USER,
      payload: user,
    });
  };
};

// Provider and context
const { Provider, Context } = createDataContext(
  reducer,
  {
    signin,
    signout,
    signup,
    forgotPassword,
    resetPassword,
    setUser,
  },
  initialState
);

export { Provider, Context, ActionTypes };
