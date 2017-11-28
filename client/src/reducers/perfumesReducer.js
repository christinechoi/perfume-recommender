
const initialState = {
  perfumes: [],
  selectedPerfumes: [],
  recommendations: [],
  basedOn: [],
  savedRecommendations: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      // {debugger};
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
     
      {debugger};
      return {  
        ...state, 
        selectedPerfumes: state.selectedPerfumes.concat(action.perfume)
      }

    case 'DELETE_PERFUME':
      // {debugger};
      let moddedArray = state.selectedPerfumes.filter(function(perfume) {
        return perfume.id != action.perfume.id
      })

      // {debugger};
      return { 
        ...state, 
        selectedPerfumes: moddedArray
      };  
    case 'GET_RECOMMENDATION':
      {debugger};
      return { 
        ...state, 
        recommendations: state.recommendations.concat(action.payload.recommendations),
        basedOn: state.basedOn.concat(action.payload.basedOn) };  
    case 'SAVE_RECOMMENDATION':
      {debugger};
      return {
        ...state,
        savedRecommendations: state.savedRecommendations.concat(action.payload.savedRecommendation)
      }
      
    case 'FETCH_SAVED_RECS':
      {debugger};

      return {
        ...state,
        savedRecommendations: state.savedRecommendations.concat(action.payload)
      }
    default:
      // {debugger};
      return state;
  }   
};

