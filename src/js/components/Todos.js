import React from 'react';
import TodoStore from '../stores/TodosStore';
import * as TodosAction from '../actions/TodosActions';

export default class Todos extends React.Component {

    constructor() {
        super();
        this.state = {todos: TodoStore.getAll()};
        this.tempTodo = {header: '', description: ''};
    }

    componentWillMount() {
        TodoStore.on('change', this.setTodos.bind(this));
    }

    componentWillUnmount() {
        TodoStore.removeListener('change', this.setTodos.bind(this));
    }

    setTodos() {
        this.setState({todos: TodoStore.getAll()});
    }

    createTodo(event) {
        if ((this.tempTodo.header.length > 0) && (this.tempTodo.description.length > 0)){
            TodosAction.createTodo(this.tempTodo.header, this.tempTodo.description);
        }
    }

    handleInputChange(event) {
        if (event.target.getAttribute('name') === 'header') {
            this.tempTodo.header = event.target.value;
        } else {
            this.tempTodo.description = event.target.value;
        }
    }

    render() {
        let todosComponent = this.state.todos.map((item, index) => {
            return getItemRender(item);
        });
        return (
            <div>
                <div class="grid-x grid-margin-x" style={alignCenter}>
                    <div class="large-4 medium-3 cell">
                        <label>Title
                            <input name='header' type='text' onChange={this.handleInputChange.bind(this)} placeholder='Enter Title'/>
                        </label>
                    </div>
                    <div class="large-4 medium-3 cell">
                        <label>Description
                            <input name='description' type='text' onChange={this.handleInputChange.bind(this)} placeholder='Enter Description'/>
                        </label>
                    </div>
                </div>
                <div class="grid-x" style={alignCenter}>
                    <div class="large-8 medium-6 cell" style={textAlignCenter}>
                        <button class='button' type='button' onClick={this.createTodo.bind(this)}>Create Todo</button>
                    </div>
                </div>
                <div class="grid-x grid-margin-x" style={alignCenter}>
                    <div class="large-8 medium-6 cell">
                        <div class="grid-x grid-margin-x">
                            {todosComponent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const getItemRender = (item) => {
    let renderItem = (
        <div class="large-4 medium-3 cell" style={listElementStyle} key={item.id}>
            <span class="h6">{item.header}</span>
            <h6 class="subheader">ID-{item.id}</h6>
            <h6 class="subheader">Status:  {statusRender(item.completed)}</h6>
            <div>
                <blockquote>
                    {item.description}
                </blockquote>
            </div>
        </div>
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

const alignCenter = {
    justifyContent: 'center'
}

const colorRed = {
    color: '#d61b1b',
    marginLeft: '5px',
    fontSize: '1.2em'
}

const listElementStyle = {
    boxShadow: '0px 0px 6px 0px #AAA7A7',
    marginTop: '15px',
    padding: '15px'
}

const textAlignCenter = {
    textAlign: 'center'
}