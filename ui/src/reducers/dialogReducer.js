import { OPEN_DIALOG, CLOSE_DIALOG, CHANGE_FORM } from '../actions/types';

const initialState = {
    DialogisOpen: false,
    ariaHide: false,
    typeForm: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return {
                DialogisOpen: action.payload.DialogisOpen,
                ariaHide: action.payload.ariaHide,
                typeForm: action.payload.typeForm
            }
            case CLOSE_DIALOG:
            return {
                DialogisOpen: action.payload.DialogisOpen,
                ariaHide: action.payload.ariaHide,
                typeForm: action.payload.typeForm
            }
            case CHANGE_FORM:
            return {
                DialogisOpen: action.payload.DialogisOpen,
                ariaHide: action.payload.ariaHide,
                typeForm: action.payload.typeForm
            }
        default:
            return state
    }
}