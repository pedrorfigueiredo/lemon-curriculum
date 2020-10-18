import axios from 'axios';

// Action Types
export const Types = {
  LOAD_PROFILE: 'profile/LOAD_PROFILE',
};

// Reducer
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_PROFILE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

// Action Creators
export const fetchProfile = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/profile`
    );
    console.log(response.data);
    dispatch({ type: Types.LOAD_PROFILE, payload: response.data });
  } catch (err) {
    if (err.response.status === 404) {
      console.log('askdjlsanfkednglkwnlwf');
    }
    console.log(err.response.status);
  }
};

export default reducer;
