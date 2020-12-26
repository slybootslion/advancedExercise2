import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { PlayerWrapper } from "./style";
import LuDiscoverMenu from "../../components/discover-menu";
import { getPlayingSongAction } from "./store/action";
import { getSizeImage } from "../../utils/format-utils";

function LuPlayer () {

  // redux hook
  const { song } = useSelector(state => ({ song: state.getIn(['player', 'playingSong']) }), shallowEqual)
  const dispatch = useDispatch()
  const { al } = song
  // router hook
  const { id } = useParams()

  // hook
  useEffect(() => {
    if (!song.id) dispatch(getPlayingSongAction(id))
  }, [dispatch, song, id])

  return (
    <div>
      <LuDiscoverMenu/>
      <PlayerWrapper>
        <div className="content wrap-v2">
          <div className="player-left">
            <div style={{ height: '1000px' }}>
              <div className="pic">
                <img src={getSizeImage(al?.picUrl, 206, 205)} alt=""/>
              </div>
            </div>
          </div>
          <div className="player-right"/>
        </div>
      </PlayerWrapper>
    </div>
  )
}

export default memo(LuPlayer)
