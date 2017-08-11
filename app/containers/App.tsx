import * as React from "react";
import { Counter, GlobalState } from "../models/state";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/actionCreators";

interface AppProps {
  increment: any;
  decrement: any;
  number: number;
}

const mapStateToProps = (state: GlobalState) => {
  return {
    number: state.Counter.number
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: (number: number) => dispatch(increment(number)),
    decrement: (number: number) => dispatch(decrement(number))
  };
};

class App extends React.Component<AppProps, undefined> {
  constructor() {
    super();
  }

  handleIncrement = () => {
    this.props.increment(1);
  };
  handleDecrement = () => {
    this.props.decrement(1);
  };
  render() {
    return (
      <div>
        <div>
          {" "}{this.props.number}
        </div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
