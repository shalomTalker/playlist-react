import { SEARCH_BY_VALUE, FETCH_PLAYLISTS } from '../actions/types'

const initialState = {
    playlists: [],
    listForSearch: []
}

export default (state=initialState, action)=> {
    switch(action.type) {
        case FETCH_PLAYLISTS:
        return {
            ...state, 
            playlists: action.payload,
            listForSearch: action.payload
        }
        // console.log(state.playlists);
        case SEARCH_BY_VALUE:
            let listForSearch = state.listForSearch
            let searchRes = listForSearch.filter(pl => pl.name.toLowerCase().includes(action.payload.toLowerCase()))

            return {
                ...state,
                playlists: searchRes
            }
        default: 
        return state;
    }
}