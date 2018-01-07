
import React, { Component } from 'react';

// import { Grid, Form, Divider, Segment, Sticky } from 'semantic-ui-react';
import { Grid } from '../semantic-ui/dist/components/grid.min.css';
import { Form } from '../semantic-ui/dist/components/form.css';
import { Segment } from '../semantic-ui/dist/components/segment.min.css';
import { Divider } from '../semantic-ui/dist/components/divider.min.css';
import { Sticky } from '../semantic-ui/dist/components/sticky.min.css';


import SearchResults from '../components/SearchResults';
import SelectedPerfumes from '../components/SelectedPerfumes';
import { fetchPerfume, addPerfume, deletePerfume, getRecommendation } from '../actions/perfumesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter} from 'react-router-dom';

class PerfumesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      perfumes: []
    };
  }

  removeOnClick = (perfume, event) => {
    event.preventDefault();
    this.props.deletePerfume(event.target, perfume);
  }

  handleOnClick = (perfume) => {
    console.log(perfume);
    this.props.addPerfume(perfume);
  }

  handleClick = (idArray, event) => {
    event.preventDefault();
    const { getRecommendation, history } = this.props;
    getRecommendation(event.target, idArray)
    history.push('/recommendations')
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    // {debugger};
    this.props.fetchPerfume(this.state);
    this.setState({
      value: ''
    });
  }

  render() {
    // {debugger};
    return(
      <div>
        <Divider></Divider>

        { (this.props.selectedPerfumes.length === 0) ? null :
          <SelectedPerfumes
            selectedPerfumes={this.props.selectedPerfumes}
            removeOnClick={this.removeOnClick} 
            handleClick={this.handleClick}
          /> 
        }

        <Divider></Divider>
        
        { (this.props.selectedPerfumes.length === 3) ? null : 
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={12}>

                <Form className="ui segment"
                  size='big'
                  onSubmit={(event) => this.handleOnSubmit(event)} >
                  <Form.Field className='ui center aligned'></Form.Field >
                  <Form.Input 
                    icon='search'
                    iconPosition='left'
                    value={this.state.value}
                    onChange={this.handleChange}
                    type="text" />
                  <Form.Button color='teal' size='massive' fluid > Search for Perfume </Form.Button>
                </Form>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        }

        <Segment></Segment>
          
          
          <SearchResults 
            perfumes={this.props.perfumes} 
            handleOnClick={this.handleOnClick} 
            addPerfume={this.props.addPerfume} 
          /> 
        }
      </div>
    );
  }
}


//{(this.props.recommendations.length > 0) ? null :
const mapStateToProps = (state) => { 
  // {debugger};
  return { 
    perfumes: state.perfumes.perfumes,
    selectedPerfumes: state.perfumes.selectedPerfumes,
    savedPerfumes: state.perfumes.savedPerfumes,
    recommendations: state.perfumes.recommendations
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPerfume: fetchPerfume,
    addPerfume: addPerfume,
    deletePerfume: deletePerfume,
    getRecommendation: getRecommendation    
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PerfumesListContainer));


