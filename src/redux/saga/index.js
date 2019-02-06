import { all } from "redux-saga/effects";

import { getScripts } from "./getScripts.saga";

export default function* rootSaga() {
  yield all([getScripts()]);
}
