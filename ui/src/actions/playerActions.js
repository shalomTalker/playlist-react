import { OPEN_PLAYER } from './types'


export const openPlayer = (songs) => dispatch => {
  dispatch({
    type: OPEN_PLAYER,
    payload: { isOpen: true, songs: songs}
  })
}  