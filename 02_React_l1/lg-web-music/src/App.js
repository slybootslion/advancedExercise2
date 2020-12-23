import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'

// tools
import routes from '@/router'
import store from '@/store'

// 组件
import LuAppHeader from '@components/app-header'
import LuAppFooter from '@components/app-footer'

export default memo(function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <LuAppHeader/>
        {renderRoutes(routes)}
        <LuAppFooter/>
      </HashRouter>
    </Provider>
  )
})
