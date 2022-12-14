//redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "./reducers/CoursesReducer";

export const store = configureStore({
  reducer: {
    CoursesReducer,
  },
});

//redux
// import { combineReducers, createStore } from 'redux';
// import { DemoReducer } from './reducers/DemoReducer';

// const rootReducer = combineReducers({
//   DemoReducer
// })

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
