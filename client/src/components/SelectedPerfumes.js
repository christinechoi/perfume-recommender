import React from 'react';
import { Card, Button, Image, Divider } from 'semantic-ui-react';

const SelectedPerfumes = (props) => {

  return (
    <div className='selected Perfumes' > {
      
      <Card.Group className='ui eight column doubling stackable grid container centered'> {
        props.selectedPerfumes.map((perfume, index) => (  
            
          <Card centered >
            <Image src={perfume.pictureURL} size='medium' />
            <Card.Content >
              <Card.Header> {perfume.name} </Card.Header> 
              <Card.Description > by {perfume.brand} </Card.Description>
            </Card.Content>
            <Card.Content extra attached="bottom" > 
              <Button 
                onClick={props.removeOnClick.bind(this, perfume)}
                basic color='red'> Remove
              </Button> 
            </Card.Content> 
          </Card>
        ))}
      </Card.Group>
    }
    <Divider></Divider>
    
    <Button 
      size='big' 
      color='blue' 
      onClick={props.handleClick.bind(this, props.selectedPerfumes.map(item => item.id))} 
      > Get Recommendation! 
    </Button>

    </div>
  );
};

export default SelectedPerfumes;
