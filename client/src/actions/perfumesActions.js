import fetch from 'isomorphic-fetch';

const API_HOST = 'https://vast-caverns-21797.herokuapp.com';

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

export function addPerfume(perfume) {
  // {debugger};
  return (dispatch) => {
    dispatch({type: 'ADD_PERFUME', payload: perfume});
  }
}

export function deletePerfume(target, perfume) {
  // {debugger};
  return (dispatch) => {
    dispatch({type: 'DELETE_PERFUME', payload: target, perfume});
  }
}

export function getRecommendation(target, ids) {
  return (dispatch) => {
    // {debugger};

    return fetch('http://scentsee.com/rest/recommendation/byFavoriteFragranceId?ids[]=' + ids)
      .then(response => {
        console.log(response);
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'GET_RECOMMENDATION', payload: responseJson})
    })
  }
}

export function fetchSavedRecs(input) {
  return (dispatch) => {
    // {debugger};
    return fetch(`${API_HOST}/perfumes`)
      .then(response => {
        console.log(response);
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_SAVED_RECS', payload: responseJson})
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


export function likeRecommendation(recommendation) {
  // {debugger};

  const API_URL = process.env.REACT_APP_API_URL

  var modPerfume = Object.assign({}, recommendation, {likes: recommendation.likes + 1})
  // {debugger};
  return (dispatch) => {
    return fetch(`${API_HOST}/perfumes` + `${recommendation.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: 
        JSON.stringify(modPerfume)
      }).then(response => {
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'LIKE_RECOMMENDATION', payload: responseJson, recommendation})    
    })
  }
}



