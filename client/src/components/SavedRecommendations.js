import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';


const SavedRecommendationsList = (props) => {
  // {debugger};

   // <Button 
   //            onClick={props.handleOnClick.bind(this, recommendation)}
   //            basic fluid color='blue'> Save Recommendation
            // </Button> 

  return (
    
    <Card.Group className='ui five column doubling stackable grid container'> {
      props.savedRecommendations.map((recommendation, index) => (  
        <Card key={index} >
        
         <Image src={recommendation.pictureURL} />
          <Card.Content extra > 
           
          </Card.Content> 
          <Card.Content >
            <Card.Header> {recommendation.name} </Card.Header> 
            <Card.Description > by {recommendation.brand} </Card.Description>
          </Card.Content>

        </Card>
      ))}
    </Card.Group>
  );
};

export default SavedRecommendationsList;
