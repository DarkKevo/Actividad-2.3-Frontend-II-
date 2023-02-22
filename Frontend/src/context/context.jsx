import { createContext, useState, useEffect } from 'react';

export const dataContext = createContext();

export function DataContextProvider(props) {
  function hola() {
    alert('hi');
  }

  return <dataContext.Provider value={{ hola }}>{props.children}</dataContext.Provider>;
}
