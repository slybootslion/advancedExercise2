import React, { PureComponent } from 'react';
import { fetchPageDataAction } from "../store/actions";
import { connect } from "react-redux";
import ContainerPage from "./ContainerPage";

class ShopPage extends PureComponent {
  componentDidMount () {
    this.props.getShopData()
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
  banner: state.pageInfo.banner,
  recommend: state.pageInfo.recommend
})

const mapDispatchToProps = dispatch => {
  return {
    getShopData () {
      // dispatch(getPageDataAction)
      dispatch(fetchPageDataAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
