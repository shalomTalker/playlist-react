import { 
    GET_ALBUM_NAME, 
    GET_ALBUM_IMAGE, 
    GET_ALBUM_SONGS, 
    ADD_SONG_FIELD, 
    REMOVE_SONG_FIELD,
    IDENTIFY_PLAYLIST } from './types';

export const getAlbumName = name => dispatch => {
    console.log('action')

    dispatch({
        type: GET_ALBUM_NAME,
        payload: name 
    });
}
export const getAlbumImage = image => dispatch => {

    dispatch({
        type: GET_ALBUM_IMAGE,
        payload: image 
    });
}
export const getAlbumSongs = songs => dispatch => {

    dispatch({
        type: GET_ALBUM_SONGS,
        payload: songs 
    });
}
export const addSongField = numOfFields => dispatch => {

    dispatch({
        type: ADD_SONG_FIELD,
        payload: numOfFields 
    });
}
export const removeSongField = numOfFields => dispatch => {

    dispatch({
        type: REMOVE_SONG_FIELD,
        payload: numOfFields 
    });
}
export const identifyPlaylist = playlistObj => dispatch => {
    dispatch({
        type: IDENTIFY_PLAYLIST,
        payload: playlistObj 
    });
}
