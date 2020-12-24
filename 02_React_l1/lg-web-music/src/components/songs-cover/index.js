import React, { memo } from 'react'
import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/format-utils";

const typeDict = {
  0: '#/discover/songs'
}

function LuSongsCover (props) {

  const { content, showSource = true, txtWrap = false } = props

  let wrapClassName = txtWrap ? 'text-nowrap' : ''

  const url = `${typeDict[content.type]}?id=${content.id}`

  return (
    <SongsCoverWrapper>
      <div className='cover-top'>
        <img src={getSizeImage(content.picUrl, 140)} alt={content.copywriter}/>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <span className="sprite_icon erji"/>
              {getCount(content.playCount)}
            </span>
            <span className="sprite_icon play"/>
          </div>
        </div>
        <a href={url} target="_blank" rel="noreferrer"
           className="cover_link"> </a>
      </div>
      <div className={`cover-bottom ${wrapClassName}`}>
        <a href={url} target="_blank" rel="noreferrer">{content.name}</a>
      </div>
      <div className={`cover-source ${wrapClassName} ${showSource ? 'show-source' : ''}`}>
        by {content.copywriter || content.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
}

export default memo(LuSongsCover)
