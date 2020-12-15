import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabControl extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  render () {
    const { titles } = this.props
    const { currentIndex } = this.state
    return (
      <div className={'tab-container'}>
        {titles.map((item, index) => (
          <div className={`tab-item${currentIndex === index ? ' active' : ''}`}
               key={item}
               onClick={() => this.onActive(index)}>
            {item}
          </div>
        ))}
      </div>
    );
  }

  onActive (currentIndex) {
    const { itemClick } = this.props
    itemClick(currentIndex)
    this.setState({
      currentIndex
    })
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired
};

export default TabControl;
