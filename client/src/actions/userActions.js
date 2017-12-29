import fetch from 'isomorphic-fetch';

export function signIn({ email, password }, history ) {
  // {debugger};
  return (dispatch) => {
    return fetch(`${API_HOST}/signup`, {

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
  return (dispatch) => {
    return fetch(`${API_HOST}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "email" : email,
        "password" : password
      })
    }).then(response => {
      // {debugger};
        return response.json().then(response =>  {
        if (!response.status == 'ok') {
          // {debugger};
          dispatch({type: 'LOGIN_REQUEST', payload: JSON.parse(response.user)});
          return Promise.reject(response)
        } else {
          // {debugger};
          localStorage.setItem('token', response.token)
          dispatch({type: 'LOGIN_SUCCESS', payload: JSON.parse(response.token)});
        }
      }).catch(err => console.log("Error: ", err))
    })
  }
}

export function saveRecommendation(target, recommendation) {
  // {debugger};
  const API_URL = process.env.REACT_APP_API_URL

  return (dispatch) => {
    return fetch(`${API_HOST}/perfumes`, {
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
