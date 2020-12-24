import React, { memo, useCallback, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import LuThemeHeaderRcm from "@/components/theme-header-rcm";
import { getTopListAction } from "../../store/action";
import { RankingWrapper } from "./style";
import LuUpRanking from "../../../../../../components/up-ranking";

function LuRecommendRanking (props) {

  // redux hook
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }), shallowEqual)

  const dispatch = useDispatch()

  // hook
  useEffect(() => {
    dispatch(getTopListAction(3))
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
  }, [dispatch])

  const goto = useCallback(() => props.history.push('/discover/ranking'), [props])

  return (
    <RankingWrapper>
      <LuThemeHeaderRcm title="榜单"
                        goto={goto}/>
      <div className="tops">
        <LuUpRanking info={upRanking}/>
        <LuUpRanking info={newRanking}/>
        <LuUpRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
}

export default memo(withRouter(LuRecommendRanking))
