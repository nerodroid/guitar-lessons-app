import { createStackNavigator } from '@react-navigation/stack';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers';
import Reactotron from './../../Reactotron-config'

const rootReducer = combineReducers({ newsReducer });
const reactotronEnhancer = Reactotron.createEnhancer && Reactotron.createEnhancer();

const middleware = [thunk];
reactotronEnhancer ? compose(applyMiddleware(...middleware), reactotronEnhancer) : applyMiddleware(...middleware)
export const Store = createStore(rootReducer, reactotronEnhancer );