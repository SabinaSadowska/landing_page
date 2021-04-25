import React from "react";
import { ButtonStyled } from "./button.styled";
import { Text } from "../Typography/typography.styled";
import Typography from "../Typography/Typography";

function Button(props) {
  return (
    <ButtonStyled buttonType={props.buttonType}>
      <Typography type={props.type} text={props.text}></Typography>
    </ButtonStyled>
  );
}

export default Button;
