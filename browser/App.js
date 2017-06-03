import React from 'react';
import ChatContainer from './ChatContainer';
import ResultContainer from './Results';

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="background" id="app">
        <h1 className="title">
          Medibot
        </h1>


        <div className="chat-col-left">
          <ChatContainer />
        </div>

        <div className="chat-col-right">
          <ResultContainer />
        </div>

      </div>
    )
  }
}

