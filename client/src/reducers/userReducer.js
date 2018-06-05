
// {debugger};
const initialState = {
  isAuthenticating: false,
  isAuthenticated: !!localStorage.token,
  currentUser: null,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      // {debugger};
      return {
        ...state,
        isAuthenticating: true
      }
    case 'LOGIN_SUCCESS':
      {debugger};
      console.log("hitting reducer login_success")
      return {
        isAuthenticating: true,
        isAuthenticated: true,
        currentUser: action.user,
        errorMessage: null
      }   
    case 'LOGIN_FAILURE':
      {debugger};
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage
      }
    case 'LOGOUT':

      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        currentUser: null,
        errorMessage: null
      }
    default:
      return state
  }
};


