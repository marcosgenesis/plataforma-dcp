import styled from "styled-components";

export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0px 1.5rem;
  & > li:after {
    content: "${() => "/"}";
    padding: 0 8px;
  }
`;

export const Crumb = styled.li`
  color: #0044cc;
  display: inline-block;
  font-family: "DM Sans";

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    color: #000000;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;
