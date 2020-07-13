import React from "react";
import styled from "styled-components";

type Props = {
  day: string;
  bought: string;
  price: string;
};

const ListItem: React.FC<Props> = (props) => {
  const { day, bought, price } = props;

  return (
    <ListLayout>
      <div>{day}</div>
      <div>{bought}</div>
      <div>{price}</div>
    </ListLayout>
  );
};

export default ListItem;

const ListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
