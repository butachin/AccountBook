import ItemsState from "../states/Items";
import ItemsAction from "../actions/Items/Action";
import ItemsActionType from "../actions/Items/ActionType";

const initialState: ItemsState = {
  day: "",
  bought: "",
  price: "",
};

export default (
  state: ItemsState = initialState,
  action: ItemsAction
): ItemsState => {
  switch (action.type) {
    case ItemsActionType.ADD_ITEMS:
      return action.payload;
    default:
      return state;
  }
};
