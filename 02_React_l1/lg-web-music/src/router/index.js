import { Redirect } from 'react-router-dom'

import LuDiscover from '@/pages/discover'
import LuRecommend from '@/pages/discover/c-pages/recommend'
import LuRanking from '@/pages/discover/c-pages/ranking'
import LuSongs from '@/pages/discover/c-pages/songs'
import LuDjRadio from '@/pages/discover/c-pages/djradio'
import LuArtist from '@/pages/discover/c-pages/artist'
import LuAlbum from '@/pages/discover/c-pages/album'
import LuMine from '@/pages/mine'
import LuFriend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover"/>
  },
  {
    path: '/discover',
    component: LuDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend"/>,
      },
      {
        path: '/discover/recommend',
        component: LuRecommend
      },
      {
        path: '/discover/ranking',
        component: LuRanking
      },
      {
        path: '/discover/recommend',
        component: LuRecommend
      },
      {
        path: '/discover/songs',
        component: LuSongs
      },
      {
        path: '/discover/djradio',
        component: LuDjRadio
      },
      {
        path: '/discover/artist',
        component: LuArtist
      },
      {
        path: '/discover/album',
        component: LuAlbum
      },
    ]
  },
  {
    path: '/mine',
    component: LuMine
  },
  {
    path: '/friend',
    component: LuFriend
  },
]

export default routes
