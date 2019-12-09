import { combineReducers } from 'redux';
import countReducer from './couter';
import todoListReducer from './todoList';
import webRTCReducer from './webRTC';


const reducers = combineReducers({
    countReducer,
    todoListReducer,
    webRTCReducer,
});
export default reducers;