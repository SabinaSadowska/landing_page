import styled from "styled-components";

const stylesProp = {
  blackSmall: {
    color: "#292930",
    fontSize: "28px",
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: "27.39px",
    letterSpacing: "-0.03em",
  },
  greySmall: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.04em",
    color: "#999FAE",
  },
  blue: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.04em",
    color: "#2522BA",
    margin: 0,
    width: "86px",
  },
  blackBig: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "96px",
    lineHeight: "95px",
    letterSpacing: "-0.025em",
    color: " #292930",
  },
  white: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.04em",
    color: "#FFFFFF",
    margin: 0,
    width: "86px",
  },
  whiteBig: {
    fontFamily: "DM Sans",
    fontWeight: "500",
    fontSize: "80px",
    lineHeight: "80px",
    letterSpacing: "-0.025em",
    color: "#FFFFFF",
    width: "772px",
  },
};

export const Text = styled.p`
  color: ${(props) => stylesProp[props.type].color};
  font-size: ${(props) => stylesProp[props.type].fontSize};
  font-family: ${(props) => stylesProp[props.type].fontFamily};
  font-weight: ${(props) => stylesProp[props.type].fontWeight};
  line-height: ${(props) => stylesProp[props.type].lineHeight};
  letter-spacing: ${(props) => stylesProp[props.type].letterSpacing};
  margin: ${(props) => stylesProp[props.type].margin};
  width: ${(props) => stylesProp[props.type].width};
`;
