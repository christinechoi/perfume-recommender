import React, { Component } from 'react';
import SavedRecommendations from '../components/SavedRecommendations';

import { connect } from 'react-redux';

import { Button, Header, Icon } from 'semantic-ui-react';
import { saveRecommendation, fetchSavedRecs } from '../actions/perfumesActions';
import { bindActionCreators } from 'redux';

class SavedContainer extends Component {
  constructor(props) {
    super(props);

    this.props.fetchSavedRecs();

    this.state = {
      savedRecommendations: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchSavedRecs();
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.fetchRecommendation(event.target)
  }

  render() {
    // {debugger};
    return (
   
      <div>
        <Header></Header>
        <Header icon textAlign='center'>
          <Icon name='flask' circular />
          <Header.Content as='h2'> 
            All Saved Recommendations 
          </Header.Content>
        </Header>

        <SavedRecommendations savedRecommendations={this.props.savedRecommendations}/>
        
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  // {debugger};
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

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);


  


