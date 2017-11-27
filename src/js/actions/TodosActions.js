import Dispatcher from '../stores/dispatcher';

export function createTodo(header, description) {
    let actionObj = {
        type: 'CREATE_TODO',
        header,
        description
    };
    Dispatcher.dispatch(actionObj);
}

export function deleteTodo(id) {
    let actionObj = {
        type: 'DELETE_TODO',
        id
    }
    Dispatcher.dispatch(actionObj);
}