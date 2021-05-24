import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';

function Questionnarie() {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState([
    {
      title: 'Who do you shop for?',
      step: 1,
      option: [
        'Myself',
        'Spouse or partner',
        'Kids',
        'Babies',
        'Extended Family',
        'Pets',
        'All of these'
      ]
    },
    {
      title: 'How often do you shop for groceries?',
      step: 2,
      option: [
        'Every day',
        '2 - 3 times a week',
        'Every 1 - 2 weeks',
        'Once a month',
        'Once every few months'
      ]
    },
    {
      title: "What's on your typical shopping list?",
      step: 3,
      option: [
        'Snacks',
        'Sweets',
        'Cooking staples',
        'Baking',
        'Pantry essentials',
        'Wine',
        'Meat & seafood',
        'Cleaning & laundry',
        'Babies or kids',
        'Bath & body',
        'Vitamins & supplements',
        'Pets',
        'All of these',
        'None of these'
      ]
    },
    {
      title: 'What diets are you interested in?',
      step: 4,
      option: [
        'Organic',
        'Gluetn free',
        'Ketogenic',
        'Paleo',
        'Vegan',
        'Vegetarian',
        'Dairy free',
        'Nut free',
        'Kosher',
        'Peanut free',
        'Raw',
        'Soy free',
        'Whole 30',
        'None of these'
      ]
    },
    {
      title: 'What values or causes are most important to you?',
      step: 5,
      option: [
        'Animal welfare',
        'Food Access',
        'Carbon impact',
        'Fair trade',
        'Sustainable sourcing',
        'Organic / non - GMO',
        'No artificial ingredients',
        'Regenrative agriculture'
      ]
    }
  ]);

  const RenderItems = () =>
    step === 6 ? (
      <div>
        <h2>hello</h2>
        <button type="button" onClick={() => setStep(1)}>
          Next Step
        </button>
      </div>
    ) : (
      options.map((option, i) =>
        option.step === step ? (
          <Div className="container" key={i}>
            <Div className="columns section is-medium">
              <Div className="has-background-primary has-text-success column is-three-fifths">
                <Section className="">
                  <Title className="title">{option.title}</Title>
                </Section>
              </Div>
              <Div className="">
                {option.option.map((items, j) => (
                  <Div className="" key={j}>
                    <p className="title">{items}</p>
                  </Div>
                ))}
              </Div>
            </Div>
            <Div>
              <button type="button" onClick={() => setStep(step + 1)} className="">
                Next
              </button>
            </Div>
          </Div>
        ) : null
      )
    );
  // add progress bar?
  return <RenderItems />;
}

const Div = styled.div`
  padding: 0;
  margin: 0;
  border: 2px solid purple;
`;

const Section = styled.div`
  text-align: center;
`;

const Title = styled.div`
  text-align: left;
  font-size: 4em;
`;

export default Questionnarie;
