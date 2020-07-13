import React from "react";
import ListItem from "../Molecules/ListItem";
import { useSelector } from "react-redux";
import RootState from "../../states";

const ListArea: React.FC = () => {
  const items = useSelector<RootState, RootState["items"]>(
    (state) => state.items
  );
  return <ListItem day={items.day} bought={items.bought} price={items.price} />;
};

export default ListArea;
