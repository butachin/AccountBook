import * as ActionCreators from "./ActionCreator";
import { ActionType } from "typesafe-actions";

type ItemsAction = ActionType<typeof ActionCreators>;

export default ItemsAction;
