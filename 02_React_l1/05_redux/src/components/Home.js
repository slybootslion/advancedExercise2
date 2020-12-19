import React from 'react';
import { Button } from "antd";
import { addAction } from "@/store/actions";
// import { connect } from "../utils";
import { connect } from 'react-redux'

function Home (props) {
  return (
    <>
      <h2>home count: {props.count}</h2>
      <Button className={'btn'} onClick={() => props.add(1)}>+1</Button>
      <Button className={'btn'} onClick={() => props.add(5)}>+5</Button>
    </>
  );
}

const mapStateToProps = state => ({ count: state.count })
const mapDispatchToProps = dispatch => {
  return {
    add (num) {
      dispatch(addAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
