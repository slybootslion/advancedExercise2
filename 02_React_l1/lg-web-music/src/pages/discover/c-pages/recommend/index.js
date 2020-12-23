import React, { memo } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

function LuRecommend () {
  return (
    <div>LuRecommend</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(LuRecommend))
