import { 
    GET_ALBUM_NAME, 
    GET_ALBUM_IMAGE, 
    GET_ALBUM_SONGS, 
    ADD_SONG_FIELD,
    REMOVE_SONG_FIELD,
    IDENTIFY_PLAYLIST } from '../actions/types';

const initialState = {
    albumName: null,
    albumImage: null,
    albumSongs: [],
    numOfFields: 3,
    playlistObj: null
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
        case ADD_SONG_FIELD:
            return {
                ...state,
                numOfFields: action.payload+1
            }
        case REMOVE_SONG_FIELD:
            return {
                ...state,
                numOfFields: action.payload-1
            }
        case IDENTIFY_PLAYLIST:
            return {
                ...state,
                playlistObj: action.payload
            }
        default:
            return state
    }
}