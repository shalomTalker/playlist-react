import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Dialog.css'


/**
 * @class DialogComponent 
 * @summary child Component that include the dialog tag structure
 * and handles the event handlers of user interaction 
 * @returns A dialog tag in which the content is found and the footer
 * 
 */
const DialogRoot = document.getElementById('dialogPlaceholder');
class Dialog extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount = () => {
        // this.props.btnNode.current.focus();
        window.addEventListener('keyup', this.keyUpHandler);
        document.addEventListener('click', this.outsideClickHandler);
        DialogRoot.appendChild(this.el);
    }

    componentWillUnmount = () => {
        window.removeEventListener('keyup', this.keyUpHandler);
        document.removeEventListener('click', this.outsideClickHandler);
        DialogRoot.removeChild(this.el);
    }
    keyUpHandler = (e) => {
        if (e.keyCode === 27) {
            this.props.onClose()
        }
    }

    outsideClickHandler = (e) => {
        let dialogPlace = document.getElementById('dialog');
        if (!dialogPlace.contains(e.target)) {
            this.props.onClose();
        }
    }

    render = () => {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        )
    }
}


export default Dialog;