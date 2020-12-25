import * as actionType from './constants'
import { getBanner, getHotRecommend, getNewAlbum, getRankingList } from "../../../../../api/discover-recommend";

const changeBannerAction = banner => ({
  type: actionType.CHANGE_BANNER,
  banner
})

const changeHotRecommendAction = hotRecommends => ({
  type: actionType.CHANGE_HOT_RECOMMEND,
  hotRecommends
})

const changeNewAlbumAction = newAlbums => ({
  type: actionType.CHANGE_NEW_ALBUM,
  newAlbums
})

const changeUpRankingAction = upRanking => ({
  type: actionType.CHANGE_UP_RANKING,
  upRanking
})

const changeNewRankingAction = newRanking => ({
  type: actionType.CHANGE_NEW_RANKING,
  newRanking
})

const changeOriginRankingAction = originRanking => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  originRanking
})

const changePlayerRankingAction = playerRanking => ({
  type: actionType.CHANGE_PALYER_RANKING,
  playerRanking
})

export const getBannerAction = () => {
  return async dispatch => {
    const res = await getBanner()
    if (res?.code === 200) dispatch(changeBannerAction(res.banners))
  }
}

export const getHotRecommendAction = (limit = 8) => {
  return async dispatch => {
    const res = await getHotRecommend({ limit })
    if (res?.code === 200) dispatch(changeHotRecommendAction(res.result))
  }
}

export const getNewAlbumAction = (limit = 10) => {
  return async dispatch => {
    const res = await getNewAlbum({ limit })
    if (res?.code === 200) dispatch(changeNewAlbumAction(res.albums))
  }
}

export const getTopListAction = (idx = 0) => {
  return async dispatch => {
    const res = await getRankingList({ idx })
    if (res?.code === 200) {
      const playlist = res.playlist
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(playlist))
          break
        case 2:
          dispatch(changeNewRankingAction(playlist))
          break
        case 3:
          dispatch(changeOriginRankingAction(playlist))
          break
        default:
          dispatch(changePlayerRankingAction(playlist))
          break
      }
    }
  }
}
