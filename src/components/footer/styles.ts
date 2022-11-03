import styled from "styled-components";

export const Container = styled.footer`
  background: #f2f2f2;
  padding: 12px 128px;
  margin-top:24px ;
  color: rgba(0, 0, 0, 0.66);
  .miniFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .links {
    display: flex;
    gap: 16px;
  }

  .expandedLinks {
    display: flex;
    justify-content: space-between;
    ul {
      padding: 0;
      li {
        height: 40px;
        list-style: none;
        a {
          text-decoration: none;
          color: #000;
          font-weight: 500;
        }
      }
    }
  }
`;
