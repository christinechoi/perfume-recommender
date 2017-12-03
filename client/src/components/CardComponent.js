import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

class CardComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    };
  }

  handleClick = () => {
    {debugger};
    this.setState({
      likes: this.state.likes + 1
    });
    {debugger};
  }

  render() {

    return (
      <div>
      <Card>
        <Image src={this.props.recommendation.url}  />
        <Card.Content extra > 
          <Button
            content='Like'
            icon='heart'
            label={this.state.likes}
            labelPosition='right'
            onClick={() => this.handleClick(this)}  
          />
        </Card.Content> 
        <Card.Content >
          <Card.Header> {this.props.recommendation.name} </Card.Header> 
          <Card.Description > by {this.props.recommendation.brand} </Card.Description>
        </Card.Content>
    </Card>
      </div>
    );
  }
};

export default CardComponent;