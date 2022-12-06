import {
  INPUT_BOX_TYPES,
  OUTPUT_BOX_TYPES,
  MOVE_BALL_TYPES,
} from './../Types/HomeTypes';

const initialstate = {
  inputdata: '',
  outputData: 0,
  movedata: '',
};

const HomeReducer = (state = initialstate, actions) => {
  switch (actions.type) {
    case INPUT_BOX_TYPES:
      return {
        ...state,
        inputdata: actions.payload,
      };
    case OUTPUT_BOX_TYPES:
      return {
        ...state,
        outputData: actions.payload,
      };
    case MOVE_BALL_TYPES:
      return {
        ...state,
        movedata: actions.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
