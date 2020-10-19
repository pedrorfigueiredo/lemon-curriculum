import profileReducer from './profile';
import { Types } from './profile';

describe('Profile reducer', () => {
  it('handles actions with unknown type', () => {
    const action = {
      type: 'RANDOM WORD',
    };

    const newState = profileReducer([], action);
    expect(newState).toEqual([]);
  });

  it('handles actions of type LOAD_PROFILE', () => {
    const action = {
      type: Types.LOAD_PROFILE,
      payload: { name: 'test' },
    };

    const newState = profileReducer([], action);

    expect(newState.data).toEqual({ name: 'test' });
  });

  it('handles actions of type SET_ERROR', () => {
    const action = {
      type: Types.SET_ERROR,
      payload: { error: 'error' },
    };

    const newState = profileReducer([], action);

    expect(newState.error).toEqual({ error: 'error' });
  });

  it('handles actions of type SET_LOADING', () => {
    const action = {
      type: Types.SET_LOADING,
      payload: { isLoading: false },
    };

    const newState = profileReducer([], action);

    expect(newState.isLoading).toEqual({ isLoading: false });
  });
});
