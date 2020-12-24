import React, { memo } from 'react'

import LuBanner from "./c-cpns/banner";
import LuHotRecommend from "./c-cpns/hot-recommend";
import { RecommendWrapper } from "./style";
import LuNewAlbum from "./c-cpns/new-album";
import LuRecommendRanking from "./c-cpns/recommend-ranking";

function LuRecommend (props) {
  return (
    <RecommendWrapper>
      <LuBanner/>
      <div className="content wrap-v2">
        <div className="recommend-left">
          <LuHotRecommend/>
          <LuNewAlbum/>
          <LuRecommendRanking/>
        </div>
        <div className="recommend-right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(LuRecommend)
