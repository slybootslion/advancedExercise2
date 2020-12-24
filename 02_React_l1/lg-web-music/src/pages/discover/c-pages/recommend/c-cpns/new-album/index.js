import React, { memo, useCallback, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NewAlbumWrapper } from "./style";
import LuThemeHeaderRcm from "@/components/theme-header-rcm";
import { getNewAlbumAction } from "../../store/action";
import { Carousel } from "antd";
import LuAlbumCover from "../../../../../../components/album-cover";

function LuNewAlbum (props) {

  //redux hooks
  const { albums } = useSelector(state => ({ albums: state.getIn(['recommend', 'newAlbums']) }), shallowEqual)

  const dispatch = useDispatch()

  // hooks
  const pageRef = useRef()

  useEffect(() => dispatch(getNewAlbumAction()), [dispatch])

  const goto = useCallback(() => props.history.push('/discover/album'), [props.history])

  return (
    <NewAlbumWrapper>
      <LuThemeHeaderRcm title="新碟上架"
                        goto={goto}/>
      <div className="content">
        <button className="arrow arrow-left sprite_02"
                onClick={() => pageRef.current.prev()}/>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(block => {
                return (
                  <div key={block} className="page">
                    {
                      albums.slice(block * 5, (block + 1) * 5).map(album => {
                        return (
                          <LuAlbumCover key={album.id}
                                        width={118}
                                        size={100}
                                        bgp="-570px"
                                        album={album}/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={() => pageRef.current.next()}/>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(withRouter(LuNewAlbum))
