import { get } from "lodash";

export const getScriptData = state => get(state, "scripts.data", []);

export const getScriptError = state => get(state, "scripts.error", {});

export const getIsScriptFetching = state =>
  get(state, "script.isFetching", false);

export const getIsScriptError = state => get(state, "script.isError", false);
