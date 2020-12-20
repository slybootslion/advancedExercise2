import React, { PureComponent } from 'react';
import { getPageDataAction } from "../store/actions";
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
  banner: state.banner,
  recommend: state.recommend
})

const mapDispatchToProps = dispatch => {
  return {
    getShopData () {
      dispatch(getPageDataAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
