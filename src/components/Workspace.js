import React from "react";
import ItemCard from "./ItemCard";
export default class Workspace extends React.Component {
    render() {
        const {currentList,renameItemCallback,addMoveItemTransactionCallback,addChangeItemTransactionCallback} = this.props
        console.log( currentList);
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id = "edit-items">
                        {currentList && currentList.items.map(function(name, index){
                            return <ItemCard
                            name = {name}
                            index = {index}
                            renameItemCallback={renameItemCallback}
                            addMoveItemTransactionCallback = {addMoveItemTransactionCallback}
                            addChangeItemTransactionCallback = {addChangeItemTransactionCallback}
                            />;
                        })}
                    </div>
                    
                </div>
            </div>
        )
    }
}