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
        let key = this.state.text;
        let indexValue = this.props.index;
        console.log("ItemCard handleBlur: " + indexValue + key ); // changed ListCard to ItemCard
        this.props.renameItemCallback(indexValue, key);
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
    }
    handledragenter = (event) =>{
        this.setState({className:"top5-lister-dragged-to"});
    }
    handledragleave = (event) =>{
        this.setState({className:"top5-item"});
        console.log(`DRAG-STOP: ${this.props.currentList} ${event.target.id}`);
    }



    render() {
        /*
        if (this.state.editActive) {
            return (
                <input //change this stuff class name, id, default value
                    id={"item-" + (this.props.index+1)} // name
                    className='top5-item'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={this.props.name}
                />)
        }
        else {
            return (
                <div //id key, onclick, classname, 
                    id={this.props.key}
                    key={this.props.name}
                    onClick={this.handleClick}
                    className={'top5-item'}>
                        {this.props.name}
                </div>
            );
        }*/
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
        else {//if not being edited
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