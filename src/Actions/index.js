import { PLAYER_DETAILS , PLAYER_PROFILE , MATCH_SUMMARY } from "./action-types";

export const playerDetails = (data) => {
    return {
      type: PLAYER_DETAILS,
      data,
    };
  };

  export const playerProfile = (name) => {
    return {
      type: PLAYER_PROFILE,
      name,
    };
  };

  export const matchSummary = (data) => {
    return {
      type: MATCH_SUMMARY,
      data,
    };
  };