
const initialState = {
  perfumes: [],
  selectedPerfumes: [],
  recommendations: [],
  basedOn: [],
  savedRecommendations: [],
  likes: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      let uniqueArray = [];

      action.payload.filter(function(perfume) {
        return uniqueArray.indexOf(perfume.id) == -1 && uniqueArray.push(perfume.id)
      });

      let lastArray = [];

      uniqueArray.map(function(perfumeId) {
        var item = action.payload.find(function(item) {
            return item.id === perfumeId
          });
        lastArray.push(item)
      });

      return { ...state, perfumes: lastArray}
    case 'ADD_PERFUME':
     
      let newState =  {  
        ...state, 
        selectedPerfumes: state.selectedPerfumes.concat(action.payload)
      }

      return newState

    case 'DELETE_PERFUME':
      let moddedArray = state.selectedPerfumes.filter(function(perfume) {
        return perfume.id != action.perfume.id
      })
      return { 
        ...state, 
        selectedPerfumes: moddedArray
      };  
    case 'GET_RECOMMENDATION':
      return { 
        ...state, 
        recommendations: state.recommendations.concat(action.payload.recommendations),
        selectedPerfumes: []
      };

    case 'FETCH_SAVED_RECS':
      // {debugger};
      return {
        ...state,
        savedRecommendations: action.payload
      }
    case 'SAVE_RECOMMENDATION':
      // {debugger};
      return {
        ...state,
        savedRecommendations: state.savedRecommendations.concat(action.payload),
        recommendations: []
      }
    case 'LIKE_RECOMMENDATION':
      var outdatedPerfumeIndex = state.savedRecommendations.findIndex(perfume => perfume.id === action.payload.id)
      // {debugger};
      var testState = state.savedRecommendations.splice(outdatedPerfumeIndex, 1, action.payload)
      //this is deleting all other savedRecs! bc splice return the added/deleted one
      var newState = state.savedRecommendations.splice(outdatedPerfumeIndex, 1, action.payload)
      // {debugger};
      return {
        ...state,
        savedRecommendations: state.savedRecommendations

      }
    default:
      return state
  }   
};

