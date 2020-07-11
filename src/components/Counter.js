import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAddOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  handleMinusOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Hitungan: {this.state.count}</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button style={{ marginRight: 5 }} onClick={this.handleMinusOne}>
            Substract
          </button>
          <button style={{ marginRight: 5 }} onClick={this.handleAddOne}>
            Add
          </button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  addCount: (count) => dispatch({ type: 'ADD COUNT', count }),
  substractCount: (count) => dispatch({ type: 'SUBSTRACT COUNT', count }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
