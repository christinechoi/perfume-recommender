import React from 'react';

// import { Grid, Card, Button, Image, Divider } from 'semantic-ui-react';
import { Grid } from '../semantic-ui/dist/components/grid.min.css';
import { Card } from '../semantic-ui/dist/components/card.css';
import { Button } from '../semantic-ui/dist/components/button.min.css';
import { Divider } from '../semantic-ui/dist/components/divider.min.css';
import { Image } from '../semantic-ui/dist/components/image.min.css';


const SelectedPerfumes = (props) => {
  // {debugger};
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
        fluid
        size='big' 
        color='blue' 
        onClick={props.handleClick.bind(this, props.selectedPerfumes.map(item => item.id))} 
        > Get Recommendation! 
      </Button>
    </div>
  );
};

export default SelectedPerfumes;
