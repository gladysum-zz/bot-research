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
        <ul id="result-list">
          {this.props.results ? this.props.results.map((result, index) => {return (
            <div key={index}>

              <a href={result.titleURL} target="_blank" className="article-title">
                {result.title}
              </a><br/>

              <a href={result.authorURL} target="_blank" className="article-author">
                {result.author}
              </a><br/>

              <p className="article-summary">{result.summary}</p>



            </div>
          )}) : null}
        </ul>
      </div>
    )
  }
}

