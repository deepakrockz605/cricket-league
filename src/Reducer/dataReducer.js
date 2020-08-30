import {
  PLAYER_DETAILS,
  PLAYER_PROFILE,
  MATCH_SUMMARY,
} from "../Actions/action-types";

const initState = {
  allData: {},
  matchData:{}
};

const dataReducer = (states = initState, action) => {
  states = states || initState;
  if (action.type === PLAYER_DETAILS) {
    states.allData = action.data;
    return {
      ...states,
    };
  }
  if (action.type === PLAYER_PROFILE) {
    states.playersName = action.name;
    return {
      ...states,
    };
  }
  if (action.type === MATCH_SUMMARY) {
    states.matchData = action.data;
    return {
      ...states,
    };
  } else {
    return states;
  }
};

export default dataReducer;
