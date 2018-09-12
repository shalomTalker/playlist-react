import { SEARCH_BY_VALUE, FETCH_PLAYLISTS } from './types'

export const fetchPlaylist = () => dispatch => {
    fetch('http://localhost:5000/')
    .then(res=> res.json())
    .then(playlists=> { 
        dispatch({
            type: FETCH_PLAYLISTS,
            payload: playlists
        })
    })
}  

export const searchPlaylist = (e) => dispatch => {
    let searchVal = e.target.value;
    dispatch({
        type: SEARCH_BY_VALUE,
        payload: searchVal
    })
}  
