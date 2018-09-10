import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  const styles = {
    marginLeft: "10px"
  };
  return (
    <div>
      <h1>Counter app</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>increment</button>
      <button style={styles} onClick={props.onDecrementClick}>
        decrement
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
