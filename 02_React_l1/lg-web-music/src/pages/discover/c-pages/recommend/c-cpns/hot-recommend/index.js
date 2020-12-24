import React, { memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { withRouter } from 'react-router-dom'
import { HotRecommendWrapper } from "./style";
import LuThemeHeaderRcm from "@/components/theme-header-rcm";
import { getHotRecommendAction } from "../../store/action";
import LuSongsCover from "../../../../../../components/songs-cover";

function LuHotRecommend (props) {

  // redux hooks
  const { recommends } = useSelector(state => ({ recommends: state.getIn(['recommend', 'hotRecommends']) }), shallowEqual)

  const dispatch = useDispatch()

  // hooks
  useEffect(() => dispatch(getHotRecommendAction()), [dispatch])

  const goto = useCallback(() => props.history.push('/discover/songs'), [props])

  return (
    <HotRecommendWrapper>
      <div className="recommend-list">
        <LuThemeHeaderRcm title="热门推荐"
                          keywords={['华语', '流行', '摇滚', '民谣', '电子']}
                          goto={goto}/>
        <div className='recommend-list'>
          {
            recommends.map(recommend => {
              return (
                <LuSongsCover key={recommend.id}
                              showSource={false}
                              content={recommend}/>
              )
            })
          }
        </div>
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(withRouter(LuHotRecommend))
