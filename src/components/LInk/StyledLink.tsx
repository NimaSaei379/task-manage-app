import Link from "next/link";
import styled from "styled-components";

const colors: Record<string, any> = {
    blue: {
        default: "#3f51b5",
        hover: "#283593",
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457",
    },
};

const StyledLink = styled(Link)`
  background-color: ${(props) => colors[props.color!].default};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 2px 2px lightgray;
  transition: ease background-color 250ms;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => colors[props.color!].hover};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }`
StyledLink.defaultProps = {
    color: "blue",
};

export default StyledLink;