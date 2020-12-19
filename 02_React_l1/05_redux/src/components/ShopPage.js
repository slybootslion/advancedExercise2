import React, { PureComponent } from 'react';
import axios from "axios";
import { bannerAction, recommendAction } from "../store/actions";
import { connect } from "react-redux";
import ContainerPage from "./ContainerPage";

// 1.43.20
class ShopPage extends PureComponent {
  componentDidMount () {
    const { changeBanner, changeRecommend } = this.props
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data
      const { banner, recommend } = data
      changeBanner(banner.list)
      changeRecommend(recommend.list)
    })
  }

  render () {
    return (
      <div>
        <ContainerPage/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  banner: state.banner,
  recommend: state.recommend
})
const mapDispatchToProps = dispatch => {
  return {
    changeBanner (banner) {
      dispatch(bannerAction(banner))
    },
    changeRecommend (recommend) {
      dispatch(recommendAction(recommend))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
