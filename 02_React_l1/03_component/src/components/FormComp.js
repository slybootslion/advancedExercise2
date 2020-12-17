import React, { PureComponent } from 'react';

/*受控组件*/
class FormComp extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      sel: 2
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            <input type="text" id="username"
                   onChange={e => this.handleChange(e)}
                   value={this.state.username}/>
          </label>
          <label htmlFor="sel">
            <select name="sel"
                    onChange={e => this.handleChange2(e)}
                    value={this.state.sel}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <button>提交</button>
          <p>username: {this.state.username}</p>
        </form>
      </div>
    );
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.username)
    console.log(this.state.sel)
  }

  handleChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleChange2 (e) {
    this.setState({
      sel: e.target.value
    })
  }
}


export default FormComp;
