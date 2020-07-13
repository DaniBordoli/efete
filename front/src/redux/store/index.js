import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import reducer from '../store/reducers/index'
import thunkMiddleware from 'redux-thunk'

export default createStore(reducer,(applyMiddleware(createLogger(),thunkMiddleware)));