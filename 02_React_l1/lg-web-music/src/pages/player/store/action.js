import * as actionType from './constants'
import { getPlayingSong } from "../../../api/palyer";

const changePlayingSongAction = playingSong => ({
  type: actionType.CHANGE_PLAYING_SONG,
  playingSong
})

const changePlayListAction = playList => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = index => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const getPlayingSongAction = ids => {
  return async (dispatch, getState) => {
    // 1. 播放列表中查找是否又相关歌曲
    const playList = getState().getIn(['player', 'playList'])
    console.log(playList)
    const songIdx = playList.findIndex(song => song.id === ids)

    // 在播放列表中
    if (songIdx > -1) {
      dispatch(changeCurrentSongIndexAction(songIdx))
      dispatch(changePlayingSongAction(playList[songIdx]))
      return
    }

    // 不在播放列表中
    const res = await getPlayingSong({ ids })
    if (res?.code === 200) {
      const song = res.songs[0]
      dispatch(changeCurrentSongIndexAction(0))
      const pl = [...playList]
      pl.unshift(song)
      dispatch(changePlayListAction(pl))
      dispatch(changePlayingSongAction(song))
    }
  }
}
