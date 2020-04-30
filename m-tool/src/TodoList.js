import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    itemList: prevState.itemList.concat(newItem)
                };
            });

            this._inputElement.value = "";
            console.log(this.state.itemList);

        }
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.itemList.filter(function(item){
            return (item.key !== key)
        });

        this.setState({
            itemList: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}> 
                        <input placeholder="enter shit"
                        ref={(a) => this._inputElement = a}>
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItem entries={this.state.itemList}
                        delete={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;