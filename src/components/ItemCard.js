import React from "react";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.name,
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 2) {
            this.handleToggleEdit(event);
        }
    }

    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        let prevName = this.props.name;
        let key = this.state.text; // new Name
        let indexValue = this.props.index; //
        console.log("ItemCard handleBlur: " + indexValue + key ); // changed ListCard to ItemCard
        this.props.renameItemCallback(indexValue, key,prevName);
        this.handleToggleEdit();
    }

    handledragstart = (event) =>{
        event.dataTransfer.setData("text",event.target.id);
        console.log(`DRAG-START: ${this.props.currentList} ${event.target.id}`);
    }
    handledragover = (event) =>{
        event.preventDefault();
    }
    handledrop = (event) =>{
        event.preventDefault();
        let id = event.target.id.slice(-1);
        let start = event.dataTransfer.getData("text").slice(-1);
        this.props.addMoveItemTransactionCallback(start,id);
        this.setState({className:"top5-item"});
        document.getElementById(event.target.id).style.backgroundColor = "#e1e4cb"
    }
    handledragenter = (event) =>{
        this.setState({className:"top5-lister-dragged-to"});
        document.getElementById(event.target.id).style.backgroundColor = "#669966"
    }
    handledragleave = (event) =>{
        this.setState({className:"top5-item"});
        document.getElementById(event.target.id).style.backgroundColor = "#e1e4cb"
    }



    render() {
        
        console.log("rendered ");
        if (this.state.editActive) {
            return (
                <input
                id={"item-" + (this.props.index+1)}
                    className="top5-item"
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={this.props.name}
                />)
        }
        else {
            return (
                <div
                id={"item-" + (this.props.index+1)}
                    onClick={this.handleClick}
                    draggable="true"
                    onDragStart={this.handledragstart}
                    onDragOver={this.handledragover}
                    onDrop={this.handledrop}
                    onDragEnter={this.handledragenter}
                    onDragLeave={this.handledragleave}          
                    className={'top5-item'}>
                        {this.props.name}
                </div>
            );
        }
    }
}