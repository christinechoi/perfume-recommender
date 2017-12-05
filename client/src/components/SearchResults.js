import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';


const SearchResults = (props) => {
 
  return (
    <Card.Group className='ui five column doubling stackable grid container centered'> {
      props.perfumes.map((perfume, index) => (  
        <Card >
          <Image src={perfume.pictureURL} size='big' />
          <Card.Content extra > 
            <Button 
              onClick={() => props.handleOnClick(perfume)}
              basic fluid color='blue'> Add to List
            </Button> 
          </Card.Content> 
          <Card.Content >
            <Card.Header> {perfume.name} </Card.Header> 
            <Card.Description > by {perfume.brand} </Card.Description>
          </Card.Content>
          
        </Card>
      ))}
    </Card.Group>
  );
};

export default SearchResults;
