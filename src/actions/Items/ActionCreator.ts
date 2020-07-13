import { createAction } from "typesafe-actions";
import TasksActionType from "./ActionType";
import ItemsState from "../../states/Items";

export const addItems = createAction(TasksActionType.ADD_ITEMS)<ItemsState>();
