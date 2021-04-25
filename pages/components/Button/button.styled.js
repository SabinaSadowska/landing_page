import styled from "styled-components";

const stylesProp = {
  white: {
    backgroundColor: "#FFFFFF",
    width: "180px",
    height: "72px",
  },
  blue: {
    backgroundColor: "#5956E9",
    width: "178px",
    height: "82px",
    margin: "20px 0 0 0",
  },
};

export const ButtonStyled = styled.button`
  color: ${(props) => stylesProp[props.buttonType].color};
  background-color: ${(props) => stylesProp[props.buttonType].backgroundColor};
  width: ${(props) => stylesProp[props.buttonType].width};
  height: ${(props) => stylesProp[props.buttonType].height};
  margin: ${(props) => stylesProp[props.buttonType].margin};

  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
`;
