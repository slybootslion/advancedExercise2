import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'

// tools
import routes from '@/router'
import store from '@/store'

// 组件
import LuAppHeader from '@components/app-header'
import LuAppFooter from '@components/app-footer'
import AppPlayerBar from "./pages/player/app-player-bar";

export default memo(function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <LuAppHeader/>
          <Suspense fallback={<span>loading...</span>}>
            {renderRoutes(routes)}
          </Suspense>
        <LuAppFooter/>
        <AppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})
