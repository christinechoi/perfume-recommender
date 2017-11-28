import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const RecommendationsList = (props) => {
  return (
    <div>
      <Card.Group className='ui five column doubling stackable grid container centered'> {
        props.recommendations.map((recommendation, index) => (  
          <Card key={index} >
           <Image src={recommendation.pictureURL} />
            <Card.Content extra > 
              <Button centered
                onClick={props.handleOnClick.bind(this, recommendation)}
                basic fluid color='blue'> Save Recommendation
              </Button> 
            </Card.Content> 
            <Card.Content >
              <Card.Header> {recommendation.name} </Card.Header> 
              <Card.Description > by {recommendation.brand} </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default RecommendationsList;
