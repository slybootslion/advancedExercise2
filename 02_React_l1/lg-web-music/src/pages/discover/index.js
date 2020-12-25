import React, { memo } from 'react'
import { renderRoutes } from "react-router-config";
import LuDiscoverMenu from "../../components/discover-menu";

export default memo(function LuDiscover (props) {
  const { routes } = props.route

  return (
    <div>
      <LuDiscoverMenu />
      {renderRoutes(routes)}
    </div>
  )
})
