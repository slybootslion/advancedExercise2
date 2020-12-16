import React, { Component } from 'react';
import { UserContext } from "./Component1";

class Banner extends Component {
  constructor (props) {
    super(props);
    Banner.contextType = UserContext
  }

  render () {
    return (
      <div>
        {this.context.bannerData.map(banner => <span key={banner}>banner {banner} </span>)}
      </div>
    );
  }
}

export default Banner;
