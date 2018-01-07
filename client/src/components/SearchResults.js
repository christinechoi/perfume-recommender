import React from 'react';

import { Card, Image, Icon, Button } from '../styles.global.scss'//'semantic-ui-react';
// import { Card } from '../semantic-ui/dist/components/card.min.css';
// import { Button } from '../semantic-ui/dist/components/button.min.css';
// import { Image } from '../semantic-ui/dist/components/image.css';
// import { Icon } from '../semantic-ui/dist/components/icon.css';


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
