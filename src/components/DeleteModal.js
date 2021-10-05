import React, { Component } from 'react';

export default class DeleteModal extends Component {
    render() {
        const {listKeyPair, hideDeleteListModalCallback,confirmDelete } = this.props;
        let name = "";
        //let key = 0;
        console.log(listKeyPair);
        if (listKeyPair) {
            name = listKeyPair.name;
            //key = listKeyPair.key;
        }
        return (
            <div
                className="modal"
                id="delete-modal"
                data-animation="slideInOutLeft">
                <div className="modal-dialog">
                    <header className="dialog-header">
                        Delete the {name} Top 5 List?
                    </header>
                    <div id="confirm-cancel-container">
                        <button
                            id="dialog-yes-button"
                            className="modal-button"
                            onClick={confirmDelete}
                        >Confirm</button>
                        <button
                            id="dialog-no-button"
                            className="modal-button"
                            onClick={hideDeleteListModalCallback}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}