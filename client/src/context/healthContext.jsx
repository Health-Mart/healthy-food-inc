import React, { useState, createContext } from 'react';

export const HealthContext = createContext();

const HealthProvider = (props) => {
  const { children } = props;
  // create states here
  // ex: [test, setTest] = useState('im a test woot')
  const [survey, setSurvey] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [select, setSelect] = useState(false);
  return (
    <HealthContext.Provider
      value={{
        question: [survey, setSurvey],
        recipeStore: [recipes, setRecipes],
        isSelect: [select, setSelect]
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};

export default HealthProvider;

// Use a state through context
// Scenario: I want to use the state [survey, setSurvey]

// In component
// import React, {useContext} from 'react';
// import { HealthContext } from <route to this specific file>

// In function
// const { question } = useContext(HealthContext);
// const [survey, setSurvey] = question;

// THATS IT!!!! : D
