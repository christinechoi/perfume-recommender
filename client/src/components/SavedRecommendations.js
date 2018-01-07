import React from 'react';

import { Card, Button, Image } from 'semantic-ui-react';
// import { Card } from '../semantic-ui/dist/components/card.min.css';
// import { Button } from '../semantic-ui/dist/components/button.min.css';
// import { Image } from '../semantic-ui/dist/components/image.css';


import { connect } from 'react-redux';
import CardComponent from '../components/CardComponent';

const SavedRecommendations = (props) => {

  return (
    <div>
      <Card.Group className='ui five column doubling stackable grid container'> {
        props.savedRecommendations.map((recommendation, index) => (  
          <CardComponent
            key={index} 
            recommendation={recommendation}
          />
        ))}
      </Card.Group>
    </div>
  );

}

const mapStateToProps = (state) => { 
  return { 
    savedRecommendations: state.perfumes.savedRecommendations
  };
};

export default connect(mapStateToProps)(SavedRecommendations);
