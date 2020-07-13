import React from "react";
import styled from "styled-components";
import GraphArea from "../Organisms/GraphArea";
import MenuArea from "../Organisms/MenuArea";
import ListArea from "../Organisms/ListArea";

const HomePage: React.FC = () => {
  return (
    <GridLayout>
      <MenuArea />
      <GraphArea />
      <ListArea />
    </GridLayout>
  );
};

export default HomePage;

const GridLayout = styled.div`
  display: grid;
`;
