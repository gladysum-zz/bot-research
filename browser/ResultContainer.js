
import React from 'react';
import { connect } from 'react-redux'
import ResultList from './ResultList';

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
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

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)