import fetch from 'isomorphic-fetch';

export function fetchPerfume(input) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_PERFUMES_REQUEST' });
    // {debugger};
    let searchTerm = input.value
    return fetch('http://scentsee.com/rest/collection/queryFull?query=' + searchTerm)
      .then(response => {
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_PERFUME', payload: responseJson})
    })
  }
}

export function addPerfume(target, perfume) {
  // {debugger};
  return (dispatch) => {
    dispatch({type: 'ADD_PERFUME', payload: target, perfume});
  }
}

export function deletePerfume(target, perfume) {
  // {debugger};
  return (dispatch) => {
    dispatch({type: 'DELETE_PERFUME', payload: target, perfume});
  }
}

export function getRecommendation(target, ids) {
   
}

export function saveRecommendation(target, recommendation) {
  {debugger};

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

export function fetchSavedRecs(input) {
  return (dispatch) => {
    // {debugger};
    return fetch('http://localhost:3001/perfumes')
      .then(response => {
        console.log(response);
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_SAVED_RECS', payload: responseJson})
    })
  }
}


