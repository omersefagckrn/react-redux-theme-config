import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';

/* AppSlice */
import themeReducer from './theme/themeSlice';

export type RootState = ReturnType<typeof store.getState>;

const appReducer = combineReducers({
	theme: themeReducer
});

const store = configureStore({
	reducer: appReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppSelector = typeof store.getState;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
