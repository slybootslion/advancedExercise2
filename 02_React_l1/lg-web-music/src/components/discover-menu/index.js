import React, { memo } from 'react'
import { dicoverMenu } from "../../common/local-data";
import { NavLink } from "react-router-dom";
import { DiscoverWrapper } from "./style";

function LuDiscoverMenu (props) {
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
    </DiscoverWrapper>
  )
}

export default memo(LuDiscoverMenu)
