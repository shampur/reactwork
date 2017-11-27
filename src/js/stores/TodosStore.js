import EventEmitter from 'events';
import Dispatcher from './dispatcher';

class TodosStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 'todo_100',
                header: 'I need to study react',
                description: 'Practice all the basic concepts of the official react library, which includes ' +
                'Components, Props, States, JSX',
                completed: false
            },
            {
                id: 'todo_101',
                header: 'Experiment with React Router',
                description: 'Try out the usage of react router, specifically understand how react-router-dom works.',
                completed: false
            },
            {
                id: 'todo_102',
                header: 'Try out flux store pattern with react',
                description: 'Figure out how to use EventEmitter and dispatcher to handle all the data within the' +
                'react application',
                completed: false
            }
        ]
    }

    create(header, description) {
        const id = todo + Date.now().toString();
        this.todos.push({id, header, description, completed: false});
        this.emit('change');
    }

    getAll() {
        return this.todos;
    }

    handleAction(action) {
        switch (action.type){
            case 'CREATE_TODO' :    this.create(action.header, action.description);
                                    break;
        }
    }
}

const todoStore = new TodosStore();
Dispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;