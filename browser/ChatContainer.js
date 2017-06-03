import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ChatComponent from './ChatComponent';
import {addInputAction, addResponseAction} from './reducer'

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
    let input = this.state.value;

    // Clear the user input field upon submit
    this.setState({value: ''});

    // Update the redux store with user's input
    this.props.addInput(input)

    // Send input to Watson; update redux store with Watson's response
    axios.post('/', {input: input})
    .then(res=>res.data)
    .then(response=>{this.props.addResponse(response)})
    .catch(error=>{console.log(error)});
  }

  render () {
    return (
      <div className="chat-container">
        <ChatComponent messages={this.props.messages} />
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <TextField hintText="Type a message..." value={this.state.value} onChange={this.handleChange}/>
          </div>
          <div className="submit-button-container">
            <FlatButton type="submit" label="Submit" className="submit-button" primary={true} />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  addInput: input => {
    dispatch(addInputAction(input))
  },
  addResponse: response => {
    dispatch(addResponseAction(response))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)