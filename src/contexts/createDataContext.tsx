import React, { useReducer, FunctionComponent } from "react";

export default (reducer: any, actions: any, defaultValue: any) => {
  const Context = React.createContext(defaultValue);

  const Provider: FunctionComponent<{ children: any }> = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    let boundActions: any = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {props.children}
      </Context.Provider>
    );
  };

  return { Context: Context, Provider: Provider };
};
