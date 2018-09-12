import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer'
import playerReducer from './playerReducer';
import dialogReducer from './dialogReducer';
import formReducer from './formReducer';

export default combineReducers({
    playlists: playlistReducer,
    player: playerReducer,
    dialog: dialogReducer,
    form: formReducer
})