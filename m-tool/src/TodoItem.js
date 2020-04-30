import React, { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

    createTasks(item) {
        return <div>
            <li key={item.key}>{item.text}</li><button onClick={() => this.delete(item.key)}></button>
        </div>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItem;