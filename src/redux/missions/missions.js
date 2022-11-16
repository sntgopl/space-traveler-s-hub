import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSION = 'space/missions/GET_MISSION';

const initialState = [];

export const getMission = createAsyncThunk(GET_MISSION, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const result = response.json();
  return result;
});

const missionReducer = (state = initialState, action) => {
  let list = [];
  switch (action.type) {
    case `${GET_MISSION}/fulfilled`:
      list = action.payload.map((element) => {
        const mission = {};
        mission.id = element.mission_id;
        mission.name = element.mission_name;
        mission.description = element.description;
        return mission;
      });
      return list;
    default:
      return state;
  }
};

export default missionReducer;
