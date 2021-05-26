import React, { useState, createContext } from 'react';

export const HealthContext = createContext();

const HealthProvider = (props) => {
  const { children } = props;
  //create states here
  //ex: [test, setTest] = useState('im a test woot')
  return (
    <HealthContext.Provider value={'test'}>
      {children}
    </HealthContext.Provider>
  )
};

export default HealthProvider;