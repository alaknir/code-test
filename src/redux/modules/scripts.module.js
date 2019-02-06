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
      get: () => {
        console.log("===get");
      },
      receive: response => {
        console.log("===receive");
        return response;
      },
      error: error => {
        console.log("===error");
        return error;
      }
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
