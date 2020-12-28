import { Component } from "./react/react";

function ChildrenComp (props) {
  return <div>{props.value}</div>
}

class AppComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      num: 0,
      name: props.name
    }
  }

  add () {
    this.setState({
      num: this.state.num + 1
    })
  }

  render () {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <div>{this.state.num}</div>
        <button onClick={() => this.add()}>+1</button>
      </div>
    )
  }

}

export default function App (props) {
  return (
    <div className="title">
      <span>hello,</span><span>{props.name}</span>
      <p style={{ color: 'red', backgroundColor: 'yellow' }}>{props.children}</p>
      <ChildrenComp value={123}/>
      <AppComponent name="计数器"/>
    </div>
  )
}
