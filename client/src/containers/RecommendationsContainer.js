import React, { Component } from 'react';
import RecommendationsList from '../components/RecommendationsList';
import { connect } from 'react-redux';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { saveRecommendation, fetchSavedRecs } from '../actions/perfumesActions';
import { withRouter} from 'react-router-dom';

import { bindActionCreators } from 'redux';

class RecommendationsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommendations: []
    };
  }

  handleOnClick = (recommendation, event)  => {
    event.preventDefault();
    const { saveRecommendation, history } = this.props;
    {debugger};

    // if not logged in, an alert should say 
    // 'You must be logged in to save a recommendation!'
    // and then history.push? or nothing 
    saveRecommendation(event.target, recommendation);
    history.push('/savedrecommendations')
  }

  handleClick = (event) => {
    event.preventDefault();
    // {debugger};
    this.props.fetchRecommendation(event.target)
  }

  render() {
    {debugger};
    return (
      <div>
        {(this.props.recommendations.length === 0) ? null :
          <RecommendationsList 
            recommendations={this.props.recommendations} 
            handleOnClick={this.handleOnClick} > 
            Recommendations below: 
          </RecommendationsList>
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
    fetchSavedRecs: fetchSavedRecs
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecommendationsContainer));


  


