import { combineReducers } from 'redux';
import countReducer from './couter';
import todoListReducer from './todoList';


const reducers = combineReducers({
    countReducer,
    todoListReducer,
});
export default reducers;