import React, { memo } from 'react'
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { DiscoverWrapper } from './style'
import { dicoverMenu } from "@/common/local-data";

export default memo(function LuDiscover (props) {
  const { routes } = props.route

  return (
    <DiscoverWrapper>
      <div className="top">
        <div className="top-menu wrap-v1">
          {
            dicoverMenu.map(menu => {
              return (
                <div className={'item'} key={menu.link}>
                  <NavLink to={menu.link} exact>
                    {menu.title}
                  </NavLink>
                </div>
              )
            })
          }
        </div>
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  )
})
