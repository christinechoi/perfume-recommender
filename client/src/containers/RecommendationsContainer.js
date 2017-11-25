import React, { Component } from 'react';
import RecommendationsList from '../components/RecommendationsList';
import { connect } from 'react-redux';

import { Button, Header, Icon } from 'semantic-ui-react';
import { fetchSavedRecommendation, saveRecommendation } from '../actions/perfumesActions';
import { bindActionCreators } from 'redux';

class RecommendationsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommendations: [],
      basedOn: [],
      savedRecommendations: []
    }
  }

  handleOnClick = (recommendation, event)  => {
    event.preventDefault();
    {debugger};
    this.props.saveRecommendation(event.target, recommendation);
  }

  handleClick = (event) => {
    event.preventDefault();
    {debugger};
    this.props.fetchRecommendation(event.target)
  }

  render() {
    // {debugger};
    return (
   
      <div>
        
      
        { (this.props.recommendations.length === 0) ? null :
          <RecommendationsList 
            recommendations={this.props.recommendations} 
            handleOnClick={this.handleOnClick} 
          />
        }
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    recommendations: state.perfumes.recommendations,
    basedOn: state.perfumes.basedOn,
    savedRecommendations: state.perfumes.savedRecommendations
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveRecommendation: saveRecommendation,
    fetchSavedRecommendation: fetchSavedRecommendation
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsContainer);


  


