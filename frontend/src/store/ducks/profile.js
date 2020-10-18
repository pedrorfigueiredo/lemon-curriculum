import axios from 'axios';

// Action Types
export const Types = {
  LOAD_PROFILE: 'profile/LOAD_PROFILE',
  SET_ERROR: 'profile/ERROR',
  SET_LOADING: 'profile/SET_LOADING',
};

// Reducer
const initialState = { data: {}, error: '', isLoading: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    case Types.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators
export const fetchProfile = () => async (dispatch) => {
  dispatch({ type: Types.SET_LOADING, payload: true });
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/profile`
    );
    dispatch({ type: Types.LOAD_PROFILE, payload: response.data });
    dispatch({ type: Types.SET_LOADING, payload: false });
  } catch (err) {
    dispatch({
      type: Types.SET_ERROR,
      payload: 'Problema em se comunicar com o servidor. Tente novamente',
    });
    dispatch({ type: Types.SET_LOADING, payload: false });
  }
};

export default reducer;
