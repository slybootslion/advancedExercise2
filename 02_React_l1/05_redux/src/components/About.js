import React from 'react';
import { Button } from "antd";
// import { connect } from "../utils";
import { connect } from 'react-redux'
import { subAction } from "../store/actions";

function About (props) {
  return (
    <>
      <h2>about count: {props.count}</h2>
      <Button className={'btn'} onClick={() => props.sub(1)}>-1</Button>
      <Button className={'btn'} onClick={() => props.sub(5)}>-5</Button>
    </>
  );
}

const mapStateToProps = state => ({ count: state.count })
const mapDispatchToProps = dispatch => {
  return {
    sub (num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
