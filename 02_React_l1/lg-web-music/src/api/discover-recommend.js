import http from './request'

export const getBanner = () => http({ url: '/banner' })

export const getHotRecommend = params => http({ url: '/personalized', params })

export const getNewAlbum = params => http({ url: '/top/album', params })

// 0 飙升榜 2 新歌榜 3 原创榜
export const getRankingList = params => http({ url: '/top/list', params })
