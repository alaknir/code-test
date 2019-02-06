import { put } from "redux-saga/effects";
import services from "../../services";
import { actions as scriptActions } from "../modules/scripts.module";

export function* getScripts() {
  yield put(scriptActions.app.scripts.get());

  const response = services({
    url: "http://localhost:8888/scripts",
    method: "get"
  });
  if (response.status !== 200) {
    yield put(scriptActions.app.scripts.error(response));
  } else {
    yield put(scriptActions.app.scripts.receive(response));
  }
}
