import React, { Component } from 'react';
import SavedRecommendations from '../components/SavedRecommendations';

import { connect } from 'react-redux';

import { Button, Header, Icon } from 'semantic-ui-react';
import { fetchSavedRecs, saveRecommendation } from '../actions/perfumesActions';
import { bindActionCreators } from 'redux';

class RecommendationsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedRecommendations: ''
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    {debugger};
    this.props.fetchRecommendation(event.target)
  }

  render() {
    {debugger};



    return (
   
      <div>
        <Header></Header>
        <Header as='h2' icon textAlign='center'>
          <Icon name='flask' circular />
          <Header.Content as='h1'> 
            All Saved Recommendations 
          </Header.Content>
        </Header>

        
        <SavedRecommendations savedRecommendations={this.props.savedRecommendations}/>
        
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  {debugger};
  return {
    savedRecommendations: state.perfumes.savedRecommendations
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveRecommendation: saveRecommendation,
    fetchSavedRecs: fetchSavedRecs
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsContainer);


  


