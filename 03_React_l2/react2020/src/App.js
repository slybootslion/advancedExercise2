import { Component } from "./react/react";

// function ChildComp (props) {
//   return (
//     <div>
//       <h2>子组件</h2>
//       <div>{props.value}</div>
//     </div>
//   )
// }

class ChildComp extends Component {
  componentWillMount () {
    console.log('1. child componentWillMount')
  }

  componentDidMount () {
    console.log('3. child componentDidMount')
  }

  componentWillReceiveProps (newProps) {
    console.log('4. child componentWillReceiveProps', newProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('5. child shouldComponentUpdate')
    return nextState.num % 3 === 0
  }

  componentWillUpdate () {
    console.log('6. child componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('7. child componentDidUpdate')
  }

  render () {
    console.log('2. child render')
    return (
      <div>
        <h2>子组件</h2>
        <div>{this.props.value}</div>
      </div>
    )
  }
}

class AppComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      num: 0,
      name: props.name
    }
  }

  componentWillMount () {
    console.log('2. componentWillMount')
  }

  componentDidMount () {
    console.log('4. componentDidMount')
  }

  add () {
    /*
        this.setState({ num: this.state.num + 1 }, () => console.log('cb1', this.state.num))
            console.log(this.state.num)
            this.setState({ num: this.state.num + 1 }, () => console.log('cb2', this.state.num))
            console.log(this.state.num)
    */
    this.setState({
      num: this.state.num + 1
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('5. shouldComponentUpdate')
    return nextState.num % 2 === 0
  }

  componentWillUpdate () {
    console.log('6. componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('7. componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('8. componentWillUnmount')
  }

  render () {
    console.log('3. render')
    const { num, name } = this.state
    return (
      <div>
        {num === 4 ? null : <ChildComp value={num}/>}
        <h2>{name}</h2>
        <div>{num}</div>
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
      <AppComponent name="计数器"/>
    </div>
  )
}
