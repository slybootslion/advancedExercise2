import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class ContainerPage extends PureComponent {
  render () {
    const recommendList = this.props.recommend
    const bannerList = this.props.banner
    return (
      <div>
        <div className="banner-box">
          banner
        </div>
        <div className="recommend-box">
          {
            bannerList.map(b => (
              <a href={b.link} key={b.acm}>
                <img src={b.image} alt=""/>
              </a>
            ))
          }
          <p>----</p>
          {
            recommendList.map(r => (
              <a href={r.link} key={r.acm}>
                <img src={r.image} alt=""/>
              </a>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  banner: state.banner,
  recommend: state.recommend
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPage);
