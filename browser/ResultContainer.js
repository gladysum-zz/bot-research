
import React from 'react';
import { connect } from 'react-redux'
import ResultList from './ResultList';

class ResultContainer extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="result-container">
        <ResultList results={this.props.results} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.results
})

export default connect(mapStateToProps)(ResultContainer)