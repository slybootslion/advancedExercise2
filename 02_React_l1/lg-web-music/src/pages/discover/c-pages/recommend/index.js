import React, { memo } from 'react'

import LuBanner from "./c-cpns/banner";
import { RecommendWrapper } from "./style";

function LuRecommend (props) {
  return (
    <RecommendWrapper>
      <LuBanner/>
      <div className="content">
        <div className="recommend-left"> </div>
        <div className="recommend-right"> </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(LuRecommend)
