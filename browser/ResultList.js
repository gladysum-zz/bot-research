import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

export default class ResultList extends React.Component {
  constructor(props) {
    super(props);
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
      <div id="result-background">
        <ul
          className="chat"
          onScroll={this.handleScroll}
          ref={
            (div) => {
              this.chatScroll = div;
            }
          }
        >
          {this.props.results.map((result, index) => {return (
            <div key={index}>
              {result}
            </div>
          )})}
        </ul>
      </div>
    )
  }
}

