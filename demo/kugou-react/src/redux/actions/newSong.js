import {
  FETCH_NEW_SONG_IF_NEEDED,
  FETCH_NEW_SONG,
  RECEIVE_NEW_SONG
} from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
import { SUCCESS, PENDING } from '../../constants/status'
export const fetchNewSongIfNeeded = () => {
  return function(dispatch, getState) {
    let status = getState().newSong.status
    if (status !== SUCCESS && status !== PENDING) {
      dispatch(fetchNewSong())
    }
  }
}
export const fetchNewSong = () => {
  return function(dispatch) {
    axios.get(api.newSong).then(res => {
      dispatch(receiveNewSong(res))
    })
  }
}
export const receiveNewSong = data => ({
  type: RECEIVE_NEW_SONG,
  data
})
