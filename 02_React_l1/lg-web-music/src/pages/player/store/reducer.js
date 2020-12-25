import { Map } from "immutable";
import * as actionType from './constants'

const defaultState = Map({
  playingSong: {},
  playList: [],
  currentSongIndex: 0,
})

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_PLAYING_SONG:
      return state.set('playingSong', action.playingSong)
    case actionType.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index)
    default:
      return state
  }
}

export default reducer
