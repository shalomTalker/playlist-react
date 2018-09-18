import { OPEN_DIALOG, CLOSE_DIALOG, CHANGE_DIALOG } from '../actions/types';

const initialState = {
    DialogisOpen: false,
    ariaHide: false,
    typeDialog: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return {
                DialogisOpen: action.payload.DialogisOpen,
                ariaHide: action.payload.ariaHide,
                typeDialog: action.payload.typeDialog
            }
            case CLOSE_DIALOG:
            return {
                DialogisOpen: action.payload.DialogisOpen,
                ariaHide: action.payload.ariaHide,
                typeDialog: action.payload.typeDialog
            }
            case CHANGE_DIALOG:
            
            return {
                DialogisOpen: action.payload.DialogisOpen,
                ariaHide: action.payload.ariaHide,
                typeDialog: action.payload.typeDialog
            }
        default:
            return state
    }
}