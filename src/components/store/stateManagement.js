// StateContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Action types
export const TOGGLE_TOPIC = 'TOGGLE_TOPIC';
export const TOGGLE_RUBRIC = 'TOGGLE_RUBRIC';
export const TOGGLE_CHAPTER = 'TOGGLE_CHAPTER';
export const TOGGLE_TERM = 'TOGGLE_TERM';

// Reducer
export const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_TOPIC:
            return { ...state, isClickedTopic: !state.isClickedTopic };
        case TOGGLE_RUBRIC:
            return { ...state, isClickedRubric: !state.isClickedRubric };
        case TOGGLE_CHAPTER:
            return { ...state, isClickedChapter: !state.isClickedChapter };
        case TOGGLE_TERM:
            return { ...state, isClickedTerm: !state.isClickedTerm };
        default:
            return state;
    }
};

// Initial state
export const initialState = {
    isClickedTopic: false,
    isClickedRubric: false,
    isClickedChapter: false,
    isClickedTerm: false,
};

const StateContext = createContext();

// Custom hook to useReducer with initialState and reducer
export const useCustomReducer = () => {
    const contextValue = useContext(StateContext);
    if (!contextValue) {
        throw new Error('useCustomReducer must be used within a StateProvider');
    }
    return [contextValue.state, contextValue.dispatch];
};

// Provider component
export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
