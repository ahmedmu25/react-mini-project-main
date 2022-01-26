import React, { createContext, useReducer, useEffect } from 'react';

const LOADING = 'LOADING';
const ERROR = 'ERROR';
const LIST_DATA = 'LIST_DATA';

export const ListDataContext = createContext();
const initalState = {
  isLoading: false,
  error: '',
  isLoaded: false,
  listData: [],
  filter: '',
  setFilter: true
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, isLoading: true };
    case ERROR:
      return { ...state, error: payload };
    case LIST_DATA:
      return { ...state, listData: payload, isLoaded: true };
    case 'GLOBALFILTER':
      return { ...state, filter: payload };
    case 'APPLYGLOBALFILTER':
      return { ...state, listData: payload, setFilter: false };

    default:
      throw new Error();
  }
};

const ListDataContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    dispatch({ type: LOADING, payload: false });
    fetch('/api')
      .then(res => res.json())
      .then(
        result => {
          dispatch({ type: LIST_DATA, payload: result });
        },
        error => {
          dispatch({ type: ERROR, payload: error });
        }
      );
  }, []);

  return (
    <ListDataContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {props.children}
    </ListDataContext.Provider>
  );
};

export default ListDataContextProvider;
