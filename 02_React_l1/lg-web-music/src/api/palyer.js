import http from './request'

// ids
export const getPlayingSong = params => http({ url: '/song/detail', params })

// id
export const getLyric = params => http({ url: '/lyric', params })

// id
export const getSimiPlaylist = params => http({ url: '/simi/playlist' })

// id
export const getSimiSong = params => http({ url: '/simi/song', params })
