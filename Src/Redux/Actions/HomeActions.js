import {
  INPUT_BOX_TYPES,
  OUTPUT_BOX_TYPES,
  MOVE_BALL_TYPES,
} from './../Types/HomeTypes';

export const fetch_inputBox_actions = data => {
  return {
    type: INPUT_BOX_TYPES,
    payload: data,
  };
};
export const fetch_outputBox_actions = data => {
  return {
    type: OUTPUT_BOX_TYPES,
    payload: data,
  };
};
export const fetch_moveball_actions = data => {
  return {
    type: MOVE_BALL_TYPES,
    payload: data,
  };
};
