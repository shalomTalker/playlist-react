import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { closeDialog } from '../../actions/dialogActions';


import Form from '../Form/Form';

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
        // this.mainNode = React.createRef();
    }
    componentDidUpdate = () => {
         if (this.props.DialogisOpen){
             window.addEventListener('keyup', this.keyUpHandler);
             document.addEventListener('click', this.outsideClickHandler);
             DialogRoot.appendChild(this.el);
         } else {
             window.removeEventListener('keyup', this.keyUpHandler);
             document.removeEventListener('click', this.outsideClickHandler);
             DialogRoot.removeChild(this.el);

         }
    }
    
    keyUpHandler = (e) => {
        console.log(e.target);
        if (e.keyCode === 27) {
            this.props.closeDialog()
        }
    }

    outsideClickHandler = (e) => {
        console.log(e.target);
        let dialogPlace = document.getElementById('dialog');
        if (!dialogPlace.contains(e.target)) {
            this.props.closeDialog();
        }
    }

    render = () => {
        const DialogEl = this.props.DialogisOpen && (
            <div>
                <div id="dialog-overlay" ></div>
                <dialog id="dialog">
                    <button
                        aria-label="Close"
                        onClick={this.props.closeDialog}>
                        ✗
                    </button>
                    <div role="document">
                        <Form onClose={this.props.closeDialog}></Form>
                    </div>
                </dialog>
            </div>
        )
        return ReactDOM.createPortal(
            DialogEl,
            this.el,
        )
    }
}
const mapStateToProps = state => ({
    DialogisOpen: state.dialog.DialogisOpen

})

export default connect(mapStateToProps,  {closeDialog})(Dialog);