import React, { Component } from 'react';
import propTypes from 'prop-types'

class GoodsList extends Component {
  render () {
    const { list, changeFun } = this.props
    return (
      <div>
        goods list
        <ul>
          {list.map(item => <li key={item}>goods {item}</li>)}
        </ul>

        <div>
          <button onClick={changeFun}> change props</button>
        </div>
      </div>
    );
  }

  static defaultProps = {
    list: [3, 4, 5]
  }

  static propTypes = {
    list: propTypes.array.isRequired
  }
}

// GoodsList.propTypes = {
//   list: propTypes.array.isRequired
// }

// GoodsList.defaultProps = {
//   list: [3, 4, 5]
// }

export default GoodsList;
