import { GET_ALBUM_NAME, GET_ALBUM_IMAGE, GET_ALBUM_SONGS } from '../actions/types';

const initialState = {
    albumName: null,
    albumImage: null,
    albumSongs: []
}

export default (state = initialState, action) => {
    console.log(action.payload)

    switch (action.type) {
        case GET_ALBUM_NAME:
            return {
                ...state,
                albumName: action.payload
            }
        case GET_ALBUM_IMAGE:
            return {
                ...state,
                albumImage: action.payload
            }
        case GET_ALBUM_SONGS:
            return {
                ...state,
                albumSongs: action.payload
            }
        default:
            return state
    }
}