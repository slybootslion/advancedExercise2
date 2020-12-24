import React, { memo } from 'react'

import { TopRankingWrapper } from "./style";
import { getSizeImage } from "../../utils/format-utils";

function LuUpRanking (props) {
  const { info } = props

  const { tracks = [] } = info

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt=""/>
          <a href="/" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/">{info.name}</a>
          <div>
            <button className="btn play sprite_02"/>
            <button className="btn favor sprite_02"/>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((track, index) => {
          return (
            <div key={track.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <div className="name text-nowrap">{track.name}</div>
                <div className="operate">
                  <button className="btn sprite_02 play"/>
                  <button className="btn sprite_icon2 addto"/>
                  <button className="btn sprite_02 favor"/>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="/">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
}

export default memo(LuUpRanking)
