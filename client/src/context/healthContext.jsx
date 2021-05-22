import React, { useState, createContext } from 'react';

export const HealthContext = createContext();

const HealthProvider = (props) => {
  const { children } = props;
  //create states here
  //ex: [test, setTest] = useState('im a test woot')
  const [count, setCount] = useState(0);
  return (
    <HealthContext.Provider value={{
      countIncrement: [count, setCount],
    }}>
      {children}
    </HealthContext.Provider>
  )
};

export default HealthProvider;