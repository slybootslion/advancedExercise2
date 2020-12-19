import React, { PureComponent } from 'react';
import axios from "axios";

class ShopPage extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      banner: [],
      recommend: []
    }
  }


  componentDidMount () {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data
      const { banner, recommend } = data
      console.log(banner.list)
      console.log(recommend.list)
    })
  }

  render () {
    return (
      <div>

      </div>
    );
  }
}

export default ShopPage;
