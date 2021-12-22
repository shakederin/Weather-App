import { applyMiddleware, createStore} from '@reduxjs/toolkit';
import { Middleware } from '../middlewares/middleware';
import { weatherReducer } from '../reducers/reducer';

export const store = createStore(weatherReducer, applyMiddleware(Middleware))
 