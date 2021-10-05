import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const { title} = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar 
                closeCallback = {this.props.closeCallback}
                undoCallback = {this.props.undoCallback}
                redoCallback = {this.props.redoCallback} 
                hasUndoCallback = {this.props.hasUndoCallback}
                hasRedoCallback = {this.props.hasRedoCallback}
                canCloseCallback = {this.props.canCloseCallback}
                />
            </div>
        );
    }
}