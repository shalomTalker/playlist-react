import { OPEN_PLAYER } from '../actions/types'

const initialState = {
    isOpen: false,
    songs:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_PLAYER:
            return {
                isOpen: action.payload.isOpen,
                songs: action.payload.songs
            }
        default:
            return state;
    }
}