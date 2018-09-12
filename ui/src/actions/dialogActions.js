import { OPEN_DIALOG, CLOSE_DIALOG, CHANGE_FORM  } from './types';

export const openDialog = () => dispatch => {
    console.log('action')

    dispatch({
        type: OPEN_DIALOG,
        payload: { DialogisOpen: true, ariaHide: true, typeForm: 'addAlbum'}
    });
}

export const closeDialog = () => dispatch => {
    dispatch({
        type: CLOSE_DIALOG,
        payload: { DialogisOpen: false, ariaHide: false, typeForm: null}
    });
}
export const changeForm = () => dispatch => {
    dispatch({
        type: CHANGE_FORM,
        payload: { DialogisOpen: true, ariaHide: true, typeForm: 'addSongs'}
    });
}
