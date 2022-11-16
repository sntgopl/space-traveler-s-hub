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
  let list = [];
  switch (action.type) {
    case `${GET_ROCKET}/fulfilled`:
      list = action.payload.map((element) => {
        const rocket = {};
        rocket.id = element.id;
        rocket.name = element.rocket_name;
        rocket.type = element.rocket_type;
        rocket.image = element.flickr_images;
        return rocket;
      });
      return list;
    default:
      return state;
  }
};

export default rocketReducer;
