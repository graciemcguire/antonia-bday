import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuestionLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:visted {
    text-decoration: none;
    color: grey;
  }
`;
