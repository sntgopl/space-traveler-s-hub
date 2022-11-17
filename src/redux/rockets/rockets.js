import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKET = 'space/rockets/GET_ROCKET';
const RESERVE_ROCKET = 'space/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'space/rockets/CANCEL_ROCKET';

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

export const reserveRocket = (payload) => (
  {
    type: RESERVE_ROCKET,
    payload,
  }
);

export const cancelRocket = (payload) => (
  {
    type: CANCEL_ROCKET,
    payload,
  }
);

const rocketReducer = (state = initialState, action) => {
  let list = [];
  let reserve = [];
  switch (action.type) {
    case `${GET_ROCKET}/fulfilled`:
      list = action.payload.map((element) => {
        const rocket = {};
        rocket.id = element.id;
        rocket.name = element.rocket_name;
        rocket.type = element.rocket_type;
        rocket.image = element.flickr_images;
        rocket.description = element.description;
        return { ...rocket, reserved: false };
      });
      return [...state, ...list];
    case RESERVE_ROCKET:
      reserve = state.map((element) => {
        if (element.id !== action.payload) {
          return element;
        }
        return { ...element, reserved: true };
      });
      return reserve;
    case CANCEL_ROCKET:
      reserve = state.map((element) => {
        if (element.id !== action.payload) {
          return element;
        }
        return { ...element, reserved: false };
      });
      return reserve;
    default:
      return state;
  }
};

export default rocketReducer;
