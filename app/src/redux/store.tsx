import { createStackNavigator } from '@react-navigation/stack';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers';
import Reactotron from './../../Reactotron-config'

const rootReducer = combineReducers({ newsReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk)); 