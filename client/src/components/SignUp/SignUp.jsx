import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import 'bulma/css/bulma.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import useUserInfo from '../../context/useUserInfo.jsx';
import Footer from './Footer.jsx';

const CreateContent = ({ count, params, signUp, handleChange, addUserInfo, userInfo }) =>
  count === 9 ? (
    <div>
      <button type="button">
        {' '}
        Check{' '}
      </button>
    </div>
  ) : (
    params.map((paramGroup, index) =>
      paramGroup.count === count
        ? paramGroup.items.map((paramItem) => (
          <div>
            <div className="is-flex is-justify-content-center">
              <div className="login-container ">
                <div className="field">
                  <label className="label">{paramItem}</label>
                  <input
                    className="input is-medium"
                    type="text"
                    name={paramItem}
                    value={signUp[paramItem]}
                    /* onChange={(max) => console.log(max)} */
                    onChange={handleChange}
                    placeholder={paramItem}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
        : null
    )
  );

const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1467453678174-768ec283a940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  height 110vh;
  opacity .90;
`;

const FormStyle = styled.div`
  border: black 1px;
  background: #f0ffff;
  justify-items: center;
  margin-right: 35vw;
  margin-left: 35vw;
  margin-bottom: 20vw;
  text-align: center;
  padding: 2em 3em;
  opacity .95;
  border-radius: 5%;
`;

function SignUp() {
  const [count, setCount] = useState(1);
  const [signUp, setSignUp] = useState({
    Name: '',
    Password: '',
    Username: '',
    Email: '',
    Address: '',
    City: '',
    State: '',
    ZipCode: '',
    CreditCard: '',
    Expiration: '',
    SecurityCode: ''
  });

  const params = [
    {
      count: 1,
      items: ['Name', 'Password', 'Username', 'Email']
    },
    {
      count: 2,
      items: ['Address', 'City', 'State', 'ZipCode']
    },
    {
      count: 3,
      items: ['CreditCard', 'Expiration', 'SecurityCode']
    }
  ];

  const { updateUserInfo, userInfo } = useUserInfo();

  const handleChange = (e) => {
    e.preventDefault();
    setSignUp((oldstate) => ({ ...oldstate, [e.target.name]: e.target.value }));
    // console.log('e.target.value', e.target.value);
    // console.log('e.target.name', e.target.name);
    /* console.log(signUp); */
  };

  const addUserInfo = () => {
    Object.entries(signUp).forEach((entry) => {
      const [key, value] = entry;
      updateUserInfo(key, value);
    });
  };

  console.log(userInfo);

  return (
    <>
      <Container>
        <section className="section is-medium">
          <FormStyle className="container">
            <img
              src="https://lh3.googleusercontent.com/gn9gZjIQ3m8Xm5ROR3AvwF3XcIqFplg7Sd3EV7di7Jwb813yXpWgErIr2-R9p5RpIxPV1PVsU9tY_Awnu0a_uJmfgU-EPk8u34JKjSsw"
              alt="alternatetext"
            />
            <CreateContent
              count={count}
              params={params}
              signUp={signUp}
              handleChange={handleChange}
              addUserInfo={addUserInfo}
              userInfo={userInfo}
            />
            <br />
            <div>
              <button
                className=" button n is-success has-text-white has-text-weight-bold is-roundedis-flex is-justify-content-center margin-top-5"
                onClick={() => {
                  if (count < 3) {
                    setCount(count + 1);
                    console.log(count);
                  } else {
                    addUserInfo(signUp);
                    console.log('redirect');
                  }
                }
                }
              >
                {count < 3 ? 'Next' :
                  (<Link to="/recipe-generator" className="has-text-white">Sign Up</Link>)
                }
              </button>
            </div>
          </FormStyle>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;

// return (
//   <>
//     <Container>
//       <div className="columns section is-medium">
//         {/* <FactStyle className="column is-5 is-size-3 box">
//           Fun Fact: <br /> {facts[count]}
//         </FactStyle> */}
//         <div className="column is-2" />
//         <FormStyle className="column box">
//           <CreateContent
//             count={count}
//             params={params}
//             signUp={signUp}
//             handleChange={handleChange}
//             addUserInfo={addUserInfo}
//             userInfo={userInfo}
//           />
//           <br />
//           <div>
//             <button
//               className=" button n is-success has-text-white has-text-weight-bold is-roundedis-flex is-justify-content-center margin-top-5"
//               onClick={() => {
//                 setCount(count + 1);
//                 addUserInfo;
//               }}
//             >
//               Next
//             </button>
//           </div>
//         </FormStyle>
//       </div>
//     </Container>
//     <br />
//   </>
// );
