import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if ((this.chatScroll.scrollTop + this.chatScroll.clientHeight) < this.chatScroll.scrollHeight) {
      this.scrolledUp = true;
    }
    else {
      this.scrolledUp = false;
    }
  }

  componentDidMount() {
    this.scrolledUp = false;
  }

  componentDidUpdate() {
    if (!this.scrolledUp) this.chatScroll.scrollTop = this.chatScroll.scrollHeight;
  }

  render() {
    return (
      <div id="chat-background">
      <ul
        className="chat"
        onScroll={this.handleScroll}
        ref={
          (div) => {
            this.chatScroll = div;
          }
        }
      >
        {this.props.messages ? this.props.messages.map((message, index) => {return (
          <div key={index} style={{textAlign: (message[0] === 'me') ? "left" : "right"}}>

            <Paper className="statement-bubble" zDepth={1} style={{verticalAlign: "middle", display: "inline-block"}} id={`statement-by-${message[0]}`}>
              <li>
                {message[1]}
              </li>
            </Paper>
          </div>
        )}) : null}
      </ul>
      </div>
    )
  }
}

