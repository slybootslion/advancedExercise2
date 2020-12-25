import React, { memo, useEffect } from 'react'

import { DjRadioWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopListAction } from "../recommend/store/action";
import LuAlbumCover from "../../../../components/album-cover";
import { getPlayingSongAction } from "../../../player/store/action";

export default memo(function LuDjRadio () {

  // redux hook
  const { ranking } = useSelector(state => ({
    ranking: state.getIn(['recommend', 'playerRanking'])
  }), shallowEqual)

  const dispatch = useDispatch()

  // hook
  useEffect(() => {
    dispatch(getTopListAction(8))
  }, [dispatch])

  const { tracks = [] } = ranking

  // methods
  function play (id) {
    dispatch(getPlayingSongAction(id))
  }

  return (
    <DjRadioWrapper>
      <div className="container wrap-v1">
        {
          tracks.map(track => {
            const album = {
              picUrl: track.al.picUrl,
              name: track.name,
              artist: {
                name: track.ar.map(item => item.name).join('/')
              }
            }
            return (
              <div className="track-item" key={track.id}>
                <LuAlbumCover album={album}/>
                <span className="a-link" onClick={() => play(track.id)}>tack</span>
              </div>
            )
          })
        }
      </div>
    </DjRadioWrapper>
  )
})
