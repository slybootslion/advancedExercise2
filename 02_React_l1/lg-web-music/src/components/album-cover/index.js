import React, { memo } from 'react'
import { AlbumCoverWrapper } from "./style";
import { getSizeImage } from "../../utils/format-utils";

function LuAlbumCover (props) {

  const { width = 153, size = 130, bgp = "-845px", album } = props

  return (
    <AlbumCoverWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(album.picUrl, size)} alt=""/>
        <div className="cover image_cover"/>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{album.name}</div>
        <div className="artist text-nowrap">{album.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
}

export default memo(LuAlbumCover)
