import { OPEN_DIALOG, CLOSE_DIALOG, CHANGE_DIALOG, VERIFY_DELETE  } from './types';


export const openDialog = (typeDialog) => dispatch => {
    console.log('action')

    dispatch({
        type: OPEN_DIALOG,
        payload: { DialogisOpen: true, ariaHide: true, typeDialog: typeDialog}
    });
}

export const closeDialog = () => dispatch => {
    dispatch({
        type: CLOSE_DIALOG,
        payload: { DialogisOpen: false, ariaHide: false, typeDialog: null}
    });
}
export const changeDialog = (typeDialog) => dispatch => {
    dispatch({
        type: CHANGE_DIALOG,
        payload: { DialogisOpen: true, ariaHide: true, typeDialog: typeDialog}
    });
}
