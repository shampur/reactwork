import React from 'react';
import TodoStore from '../stores/TodosStore';

export default class Todos extends React.Component {

    constructor() {
        super();
        this.state = {todos: TodoStore.getAll()};
    }

    componentWillMount() {
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll()
            });
        });
    }

    render() {
        let todosComponent = this.state.todos.map((item, index) => {
            return getItemRender(item);
        });
        return (
            <div class="grid-x">
                <div class="large-offset-1 large-10 medium-6 cell">
                    {todosComponent}
                </div>
            </div>
        )
    }
}

const getItemRender = (item) => {
    let renderItem = (
        <li style={listElementStyle} key={item.id}>
            <span class="h6">{item.header}</span>
            <h6 class="subheader">ID-{item.id}</h6>
            <h6 class="subheader">Status:  {statusRender(item.completed)}</h6>
            <div>
                <blockquote>
                    {item.description}
                </blockquote>
            </div>
        </li>
    )
    return renderItem;
}

const statusRender = (status) => {
    if (status) {
        return (
            <span>
                Completed
                <i class="fi-check large" style={colorGreen}></i>
            </span>
        )
    } else {
        return (
            <span>
                Not Completed
                <i class="fi-info large" style={colorRed}></i>
            </span>
        )
    }
}

const colorGreen = {
    color: '#499e38',
    marginLeft: '5px',
    fontSize: '1.2em'
}

const colorRed = {
    color: '#d61b1b',
    marginLeft: '5px',
    fontSize: '1.2em'
}

const listElementStyle = {
    boxShadow: '0px 0px 6px 0px #AAA7A7',
    marginTop: '10px',
    padding: '15px'
}