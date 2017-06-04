import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

export default class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="result-background">
        <h1 className="results-title"> Results</h1>
        <ul className="result-list">
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

