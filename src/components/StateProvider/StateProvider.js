import React, {createContext, useContext, useReducer} from "react";


//Preparing the datalayer
export const StateContext = createContext();
// Wrapper for app and providing the data layer for each component of the app
export const StateProvider = ({reducer, initalState, children}) => (
  <StateContext.Provider value={useReducer(reducer,initalState)}>
  {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue =  () => useContext 
(StateContext);
