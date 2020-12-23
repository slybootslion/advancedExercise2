import React, { memo } from 'react'
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons'
import HeaderWrapper from "./style";
import { headerLinks } from '@/common/local-data'

export default memo(function LuAppHeader () {

  // 业务代码
  function renderNavLink (item, idx) {
    if (idx < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className={'icon sprite_01'}/>
        </NavLink>
      )
    } else {
      return <a href={item.link} target='_blank' rel="noopener noreferrer">
        {item.title}
        <i className={'icon sprite_01'}/>
      </a>
    }
  }

  // jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="header-left">
          <a href="#/" className='logo sprite_01'>Lu云音乐</a>
          <div className={'select-list'}>
            {
              headerLinks.map((link, idx) => {
                return (
                  <div className={'select-item'} key={link.title}>
                    {renderNavLink(link, idx)}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="header-right">
          <Input className={'search'}
                 placeholder="音乐/视频/电台/用户"
                 prefix={<SearchOutlined/>}/>
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="divider"/>
    </HeaderWrapper>
  )
})
