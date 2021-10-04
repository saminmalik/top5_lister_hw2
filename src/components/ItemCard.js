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

    render() {

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
        }
    }
}