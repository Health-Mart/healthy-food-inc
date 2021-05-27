import React, { useState, useEffect } from 'react';
import { HealthContext } from './healthContext.jsx';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  const updateUserInfo = (x, y) => {
    setUserInfo((oldUserInfo) => ({ ...oldUserInfo, [x]: y }));
  };
  return { userInfo, updateUserInfo };
};

export default useUserInfo;

// const updateExample = {
//   name: 'Eric the Great',
//   email: 'fake@gmail.com',
//   address: '234 Fake Dr',
//   city: 'San Francisco',
//   state: 'CA',
//   zipcode: 94123,
//   creditCard: {
//     lastFourNumber: 9123,
//     expiration: '3/23',
//     securityCode: 123
//   }
// };
//
// store questionnaire data (even if user not logged in)
// (who shop for, dietary )

// questionnaire results

// userName
// userPassword
// credit card number
// expiration
// security code
// email
// address
// signedIn: false <-- determines what user sees

// questionare: null,
//

// questionare: {
// people: [],
//
// }

// sign in = true
// sign out = false

// useEffect to rerender page based on if user is user or guest
