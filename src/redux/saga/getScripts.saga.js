import { put, call } from "redux-saga/effects";
import { get } from "lodash";
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
  if (get(response, "status") !== 200) {
    alert(
      "Start the server to get data from API \n go to project path and enter the command \n node ./server.js"
    );
    yield put(scriptActions.app.scripts.error(response.error));
  } else {
    yield put(scriptActions.app.scripts.receive(response.data));
  }
}
