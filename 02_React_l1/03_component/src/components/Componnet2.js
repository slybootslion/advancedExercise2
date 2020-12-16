import React, { PureComponent } from 'react';

/* 数据不可更新 */
class Componnet2 extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      searchEngine: [
        { name: 'baidu', count: 1, },
        { name: 'google', count: 3, },
        { name: 'bing', count: 2, },
      ]
    }
  }

  // shouldComponentUpdate (nextProps, nextState, nextContext) {
  //   return this.state.searchEngine !== nextState.searchEngine;
  // }

  render () {
    const { searchEngine } = this.state
    return (
      <div>
        <h2>search engine</h2>
        <ul>
          {searchEngine.map((search, idx) => (<li key={search.name}>
            name: {search.name}, count: {search.count}
            <button style={{marginLeft: '5px'}} onClick={() => this.addData(idx)}>+1</button>
          </li>))}
        </ul>
        <button style={{ display: searchEngine.length > 3 ? 'none' : 'block' }} onClick={() => this.addData()}>添加数据
        </button>
      </div>
    );
  }

  addData (idx) {
    const seArr = [...this.state.searchEngine]
    if (idx !== undefined) {
      ++seArr[idx].count
      this.setState({
        searchEngine: seArr
      })
      return
    }
    seArr.push({ name: 'sogou', count: 0, })
    this.setState({
      searchEngine: seArr
    })

  }
}

export default Componnet2;
