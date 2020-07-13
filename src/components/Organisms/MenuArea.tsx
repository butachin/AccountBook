import React from "react";
import Label from "../Atoms/Label";
import { FontSize } from "../../styles/Font";
import styled from "styled-components";
import FormDialog from "../Molecules/FormDialog";

const MenuArea: React.FC = () => {
  return (
    <StyledMenuArea>
      <Label
        fontSize={FontSize.Large}
        text={`${new Date().getMonth() + 1}月の家計簿`}
      />
      <FormDialog />
    </StyledMenuArea>
  );
};

export default MenuArea;

const StyledMenuArea = styled.div``;
