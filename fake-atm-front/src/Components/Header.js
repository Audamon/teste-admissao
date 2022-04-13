import React from "react";
import styled from "styled-components";

function Header({ title }) {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: orange;
    display: flex;
    justify-content: center;
    > h1 {
      display: flex ;
      align-items: center;
    }
`;
