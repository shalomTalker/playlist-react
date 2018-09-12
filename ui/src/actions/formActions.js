import { GET_ALBUM_NAME, GET_ALBUM_IMAGE, GET_ALBUM_SONGS } from './types';

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
