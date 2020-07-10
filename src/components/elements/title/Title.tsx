import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1``;

const Title: React.FC<Props> = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

interface Props {
  title: string;
}

export default Title;
