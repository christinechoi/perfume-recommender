import React from 'react';
// import { Card, Button, Image } from 'semantic-ui-react';
import { Card } from '../semantic-ui/dist/components/card.min.css';
import { Button } from '../semantic-ui/dist/components/button.min.css';
import { Image } from '../semantic-ui/dist/components/image.css';


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
