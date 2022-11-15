import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
