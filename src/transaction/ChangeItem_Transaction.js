import jsTPS_Transaction from "../common/jsTPS.js"

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
    constructor(app, listKey, initItemInd, initOldText, initNewText) {
        super();
        this.app = app;
        this.listKey = listKey
        this.itemInd = initItemInd;
        this.oldText = initOldText;
        this.newText = initNewText;
    }

    doTransaction() {
        this.app.renameListItem(this.listKey, this.itemInd, this.newText);
    }
    
    undoTransaction() {
        this.app.renameListItem(this.listKey, this.itemInd, this.oldText);
    }
}