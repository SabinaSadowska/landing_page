import React from "react";
import { Text } from "./typography.styled";

function Typography(props) {
  return <Text type={props.type}>{props.text}</Text>;
}

export default Typography;
