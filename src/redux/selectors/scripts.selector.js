import { get } from "lodash";

import scriptData from "../../data/data.json";

export const getScriptData = state => get(state, "scripts.data", scriptData);

export const getScriptError = state => get(state, "scripts.error", {});

export const getIsScriptFetching = state =>
  get(state, "script.isFetching", false);

export const getIsScriptError = state => get(state, "script.isError", false);
