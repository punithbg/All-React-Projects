//set up a data layer
//we need this to track the basket

import { createContext, useContext, useReducer } from "react";

//this is data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {/*Here children is the <App/> component because we are 
    wrapping StateProvider around <App/> */}
      {children}
    </StateContext.Provider>
  );
};

//this is how we use inside a component
export const useStateValue = () => useContext(StateContext);
