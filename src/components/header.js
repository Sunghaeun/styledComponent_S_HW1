import React from "react";
import styled from "styled-components";

function Header({ toggleSidebar }) {
  
  return(
    <>
    <HeaderContainer>
      <MenuButton onClick={toggleSidebar}>
        <i class="fa fa-bars"></i> &nbsp;Menu
      </MenuButton>
      <span class="w3-bar-item w3-right" styles="  padding: 8px 16px;" >Logo</span>
    </HeaderContainer>

    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height:43px;
  z-index: 4;
  color: #fff !important;
  background-color: #000 !important;
  font-size: 18px !important;
  top: 0;
  font-family: "Raleway", sans-serif;

  display:flex;
  justify-content: space-between;

  span { padding: 8px 16px; }
  @media only screen and (min-width: 993px) {
    justify-content: flex-end;
  }
`;

const MenuButton = styled.button`
  padding: 8px 16px;
  float: left;
  width: auto;
  border: none;
  display: block;
  outline: 0;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;

  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 18px;

    @media only screen and (min-width: 993px) {
    display:none;
  }
`;