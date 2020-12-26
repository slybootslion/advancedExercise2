import { Map } from "immutable";
import * as actionType from './constants'
import { originList } from "../../../mock-data";

const defaultState = Map({
  playingSong: {},
  playList: originList,
  currentSongIndex: 0,
  sequence: 1, // 1顺序 2随机 3单曲
})

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_PLAYING_SONG:
      return state.set('playingSong', action.playingSong)
    case actionType.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index)
    case actionType.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence)
    default:
      return state
  }
}

export default reducer
