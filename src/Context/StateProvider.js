import React, { createContext, useContext, useReducer } from 'react';

//this create the centeralized store for the app 
export const StateContext = createContext();

//this is for push data in store
export const StateProvider = ({ reducer,
    initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is for pull the data from store
export const useStateValue = () => useContext(StateContext);