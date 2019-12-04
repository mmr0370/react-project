import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Component/todos/Todo';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(t => t.completed);
        case 'uncompleted':
            return todos.filter(t => !t.completed);
        default:
            console.log('Unknown filter: ' + filter)
    }
};

const mapStateToprops = state=>{
    return {
        todoList:  getVisibleTodos(state.todoListReducer.list, state.todoListReducer.filter),
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        addTodo:(props)=>{dispatch({ type:'add', name: props.name })},
        toggleTodo:(props)=>dispatch({ type: 'delete',  name: props.name, id: props.id }),
        filterSelected: (props)=>dispatch({ type: 'filter',  selected: props })
    };
};

const TodoApp = connect(mapStateToprops, mapDispatchToProps)(Todo);

export default TodoApp;
