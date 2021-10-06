import React, {createContext, useContext, useReducer} from "react"

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children})  => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// Pull information from the data layer of our APP.JS
export const useStateValue = () => useContext(StateContext);