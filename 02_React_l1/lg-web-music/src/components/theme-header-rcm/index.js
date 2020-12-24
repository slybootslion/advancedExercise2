import React, { memo } from 'react'
// import {} from 'react-router-dom'

import { ThemeHeaderWrapper } from "./style";

function LuThemeHeaderRcm (props) {
  const { title, keywords = [] } = props

  return (
    <ThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {
            keywords.map(keyword => {
              return (
                <div className="item" key={keyword}>
                  <a href={`#/discover/songs/?cat=${keyword}`}>{keyword}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right" onClick={props.goto}>
        <span>更多</span>
        <span className="icon sprite_02"/>
      </div>
    </ThemeHeaderWrapper>
  )
}

export default memo(LuThemeHeaderRcm)
