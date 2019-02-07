import { put, call } from "redux-saga/effects";
import services from "../../services";
import { actions as scriptActions } from "../modules/scripts.module";

export function* getScripts() {
  yield put(scriptActions.app.scripts.get());

  const response = yield call(
    services({
      url: "http://localhost:8888/scripts",
      method: "get"
    })
  );
  if (response.status !== 200) {
    yield put(scriptActions.app.scripts.error(response.error));
  } else {
    yield put(scriptActions.app.scripts.receive(response.data));
  }
}
