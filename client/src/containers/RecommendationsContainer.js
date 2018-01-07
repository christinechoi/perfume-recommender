import React, { Component } from 'react';
import RecommendationsList from '../components/RecommendationsList';
import { connect } from 'react-redux';
import { Segment, Button, Header, Icon } from '../styles.global.scss'//'semantic-ui-react';
// import { Button } from '../semantic-ui/dist/components/button.min.css';
// import { Header } from '../semantic-ui/dist/components/header.css';
// import { Segment } from '../semantic-ui/dist/components/segment.min.css';
// import { Icon } from '../semantic-ui/dist/components/icon.min.css';

import { saveRecommendation } from '../actions/perfumesActions';
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
    saveRecommendation(event.target, recommendation);
    this.setState({
      recommendations: []
    });
    history.push('/savedrecommendations')
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   // {debugger};
  //   this.props.fetchRecommendation(event.target)
  // }

  render() {
    // {debugger};
    return (
      <div>

      <Segment></Segment>
      
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
    saveRecommendation: saveRecommendation
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecommendationsContainer));


  


