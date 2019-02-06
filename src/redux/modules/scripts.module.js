import { createActions, handleActions } from "redux-actions";

const initialState = {
  isFetching: false,
  isError: false,
  error: {},
  data: []
};
export const actions = createActions({
  app: {
    scripts: {
      get: () => {},
      receive: response => response,
      error: error => error
    }
  }
});

const reducer = handleActions(
  {
    [actions.app.scripts.get]: state => ({
      ...state,
      isFetching: true
    }),
    [actions.app.scripts.receive]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      data: payload
    }),
    [actions.app.scripts.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isError: true,
      data: [],
      error: payload
    })
  },
  initialState
);

export default reducer;
