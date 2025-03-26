import React from "react";
import styled, { keyframes } from "styled-components";

import profile from "../assets/avatar2.png"



function Navbar({ isOpen, toggleSidebar }) {
  return(
    <>
    <Nav isOpen={isOpen}>
      <Mypagecontainer>
        <Imgbox>
          <img src={profile} />
        </Imgbox>
        <Mypagebox>
          <Textbox>
            <span>Welcome, <strong>Haeun</strong></span>
          </Textbox>
          <Iconbox>
            <i class="fa fa-envelope"></i>
            <i class="fa fa-user"></i>
            <i class="fa fa-cog"></i>
          </Iconbox>
        </Mypagebox>
      </Mypagecontainer>
      <DashBoard>
        <h5>Dashboard</h5>
        <CloseButton onClick={toggleSidebar}>
          <i class="fa fa-remove fa-fw"></i>
          <span>Close Menu</span>
        </CloseButton>
        <Boards>
          <i class="fa fa-users fa-fw"></i>
          <span>Overview</span>
        </Boards>
        <Boards>
          <i class="fa fa-eye fa-fw"></i>
          <span>Views</span>
        </Boards>
        <Boards>
          <i class="fa fa-users fa-fw"></i>
          <span>Traffic</span>
        </Boards>
        <Boards>
        <i class="fa fa-bullseye fa-fw"></i>
          <span>Geo</span>
        </Boards>
        <Boards>
          <i class="fa fa-diamond fa-fw"></i>
          <span>Orders</span>
        </Boards>
        <Boards>
          <i class="fa fa-bell fa-fw"></i>
          <span>News</span>
        </Boards>
        <Boards>
          <i class="fa fa-bank fa-fw"></i>
          <span>General</span>
        </Boards>
        <Boards>
          <i class="fa fa-history fa-fw"></i>
          <span>History</span>
        </Boards>
        <Boards>
          <i class="fa fa-cog fa-fw"></i>
          <span>Settings</span>
        </Boards>

      </DashBoard>

    </Nav>
    {isOpen && <Overlay onClick={toggleSidebar} />}
    </>

  );
}

export default Navbar;

//애니메이션 스르륵 열리고 닫히는 기능
const slideIn = keyframes`
  from {
    left: -300px;
  }
  to {
    left: 0;
  }
`;

const slideOut = keyframes`
  from {
    left: 0;
  }
  to {
    left: -300px;
  }
`;


const CloseButton = styled.button`
  width: 100%;
  height: 54.5px;
  display: block;
  padding: 8px 16px;
  text-align: left;
  border:none;
  background-color:#616161;
  color:white;

  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  span{
    padding-left:8px;
    font-size: 15px;
    line-height: 1.5;
  }

  &:hover {
    background-color:rgb(0, 0, 0);
    cursor: pointer;
  }
  cursor: pointer;

  @media only screen and (min-width: 993px) {
    display:none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 300px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
`;

const Nav = styled.nav`
  z-index:3;
  width:300px;
  display: block !important;
  color: #000 !important;
  background-color: #fff !important;

  height: 100%;
  position: fixed !important;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  line-height: 1.5;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; 
  transition: left 0.4s ease-in-out;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s ease-in-out;
  
  @media only screen and (min-width: 993px) {
    left: 0; 
  }
  `;

const Mypagecontainer = styled.div`
    height:80px;
    padding-top: 24px;
    display:flex;
    //옆으로

    border-bottom:1px solid #eee;
`;

const Imgbox = styled.div`
  margin-right: 16px !important;
  width: 70px;
  padding-left:16px;

  img{width:46px; border-radius: 50%;}
`;

const Mypagebox = styled.div`
  display:flex;
  flex-direction: column;
`;

const Textbox = styled.div`
  span{
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    line-height: 1.5;
  }
  padding-bottom:4px;
`;

const Iconbox = styled.div`
  i{
    padding:8px 16px;
    &:hover {
      background-color:rgb(184, 184, 184);
      cursor: pointer;
    }
  }
`;

const DashBoard = styled.div`
  padding-top:20px;
  h5{
    padding-left:16px;
    font-size: 18px;
    font-weight: 400;
    margin: 10px 0;
    font-family: "Raleway", sans-serif;
  }
`;

const Boards = styled.div`
  width: 100%;
  height: 38.5px;
  display: block;
  padding: 8px 16px;
  text-align: left;

  box-sizing: border-box;
  span{
    padding-left:8px;
    font-size: 15px;
    line-height: 1.5;
  }

  &:hover {
    background-color:rgb(184, 184, 184);
    cursor: pointer;
  }
`;

