import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CardComponent from '../components/CardComponent';

class SavedRecommendations extends React.Component {

  render() {
    return (
      <div>
    <Card.Group className='ui five column doubling stackable grid container'> {
      this.props.savedRecommendations.map((recommendation, index) => (  
        <CardComponent
          key={index} 
          recommendation={recommendation}
        />
      ))}
    </Card.Group></div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { 
    savedRecommendations: state.perfumes.savedRecommendations
  };
};

export default connect(mapStateToProps)(SavedRecommendations);
