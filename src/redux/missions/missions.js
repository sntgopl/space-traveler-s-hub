import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSION = 'space/missions/GET_MISSION';
const JOIN_MISSION = 'space/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space/missions/LEAVE_MISSION';

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

export const joinMission = (payload) => (
  {
    type: JOIN_MISSION,
    payload,
  }
);

export const leaveMission = (payload) => (
  {
    type: LEAVE_MISSION,
    payload,
  }
);

const missionReducer = (state = initialState, action) => {
  let list = [];
  switch (action.type) {
    case `${GET_MISSION}/fulfilled`:
      list = action.payload.map((element) => {
        const mission = {};
        mission.id = element.mission_id;
        mission.name = element.mission_name;
        mission.description = element.description;
        return { ...mission, status: false };
      });
      return list;
    case JOIN_MISSION:
      list = state.map((element) => {
        if (element.id !== action.payload) {
          return element;
        }
        return { ...element, reserved: true };
      });
      return list;
    case LEAVE_MISSION:
      list = state.map((element) => {
        if (element.id !== action.payload) {
          return element;
        }
        return { ...element, reserved: false };
      });
      return list;
    default:
      return state;
  }
};

export default missionReducer;
