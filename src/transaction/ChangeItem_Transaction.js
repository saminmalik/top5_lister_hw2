import jsTPS_Transaction from "../transaction/jsTPS.js"

/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that updates the text
 * for a given item. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(app, listKey, initNewText, initOldText) {
        super();
        this.app = app;
        this.listKey = listKey
        this.oldText = initOldText;
        this.newText = initNewText;
    }

    doTransaction() {
        this.app.renameItem(this.listKey, this.newText);
    }
    
    undoTransaction() {
        this.app.renameItem(this.listKey, this.oldText);
    }
}