import {combineReducers} from 'redux';
import app from './app';
import auth from './auth';
import viewer from './viewer';


export default  combineReducers ({
  app,
  auth,
  viewer,
})
