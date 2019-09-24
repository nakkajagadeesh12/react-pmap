import React, { createContext, useReducer, useMemo } from 'react';
import reducer from './reducer';
import data from './globalState';

const Store = createContext();

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, data);
  const value = useMemo(() => { state, dispatch }, [state]);
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}