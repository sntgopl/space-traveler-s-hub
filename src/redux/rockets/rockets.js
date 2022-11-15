import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKET = 'space/rockets/GET_ROCKET';

const initialState = [];

export const getRocket = createAsyncThunk(GET_ROCKET, async () => {
  const result = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const response = result.json();
  return response;
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKET}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
