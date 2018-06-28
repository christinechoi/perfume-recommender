import fetch from 'isomorphic-fetch';

export function signIn({ email, password }, history ) {
  // {debugger};
  return (dispatch) => {
    return fetch('http://localhost:3001/signup', {

      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ "user": {
        "email" : email,
        "password" : password
      }})
    }).then(response => {
      // {debugger};
        return response.json().then(response =>  {
        if (!response.errors) {
          // {debugger};
          dispatch({type: 'LOGIN_REQUEST', payload: JSON.parse(response.user)});
          return Promise.reject(response.errors)
        } else {
          // {debugger};
          dispatch({type: 'LOGIN_REQUEST', payload: JSON.parse(response.user)});
        }
      }).catch(err => console.log("Error: ", err))
    })
  }
}

export function logOut(event, history) {
  // {debugger};
  localStorage.removeItem('token', localStorage.token);
  return {type: 'LOGOUT'};
}

export function logIn({ email, password }, history ) {
  // {debugger};
  console.log("hitting logIn func...")
  return (dispatch) => {
    return fetch('http://localhost:3001/user_token', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ "user": {
        "email" : email,
        "password" : password
      }})
    })
    .then(response => {
      // {debugger};
        // return response.json().then(response =>  {
        // if (!response.status == 'ok') {
        //   // {debugger};
        //   console.log("dispatching login_request")
        //   dispatch({type: 'LOGIN_REQUEST', payload: JSON.parse(response.user)});
        //   return Promise.reject(response)
        // } else {
        //   // {debugger};
        //   console.log("dispatching login_success")
        //   console.log("response: ", response)
        //   localStorage.setItem('token', response.jwt)
        //   dispatch({type: 'LOGIN_SUCCESS', payload: JSON.parse(response.jwt)});
        // }
        if (!response.status == 'ok') {
          // {debugger};
          console.log("dispatching login_request")
          dispatch({type: 'LOGIN_REQUEST', payload: response.json() });
          return Promise.reject(response)
        } else {
          // {debugger};
          console.log("dispatching login_success")
          console.log("response: ", response)
          localStorage.setItem('token', response.jwt)
          dispatch({type: 'LOGIN_SUCCESS', payload: response.json() });
          // return Promise.resolve(response)
        }
      }).catch(err => console.log("Error: ", err))
    }
  }
// }

export function saveRecommendation(target, recommendation) {
  // {debugger};
  const API_URL = process.env.REACT_APP_API_URL

  return (dispatch) => {
    return fetch('http://localhost:3001/perfumes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recommendation)
      }).then(response => {
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'SAVE_RECOMMENDATION', payload: responseJson, recommendation})    
    })
  }
}
