import React from "react";
import { useState } from "react";

import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";


import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import regionImg from "./assets/region.jpg"
import img1 from "./assets/avatar1.png"
import img2 from "./assets/avatar2.png"
import img3 from "./assets/avatar3.png"
import img5 from "./assets/avatar5.png"
import img6 from "./assets/avatar6.png"
import imgH from "./assets/4.png"




function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <GlobalStyle />
    <Header toggleSidebar={toggleSidebar}/>
    <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    <Container>
      <FirstContainer>
        <h5><i class="fa fa-dashboard"></i> My Dashboard</h5>
        <DashBoardBoxes>
          <DashBoardBox bgColor="#f44336">
            <IconNumber>
              <i class="fa fa-comment w3-xxxlarge"></i>
              <h3>52</h3>
            </IconNumber>
            <h4>Messages</h4>
          </DashBoardBox>
          <DashBoardBox bgColor="#2196F3">
            <IconNumber>
              <i class="fa fa-eye w3-xxxlarge"></i>
              <h3>99</h3>
            </IconNumber>
            <h4>Views</h4>
          </DashBoardBox>
          <DashBoardBox bgColor="#009688">
            <IconNumber>
              <i class="fa fa-share-alt w3-xxxlarge"></i>
              <h3>23</h3>
            </IconNumber>
            <h4>Shares</h4>
          </DashBoardBox>
          <DashBoardBox bgColor="#ff9800">
            <IconNumber>
              <i class="fa fa-users w3-xxxlarge"></i>
              <h3>50</h3>
            </IconNumber>
            <h4>Users</h4>
          </DashBoardBox>

        </DashBoardBoxes>
      </FirstContainer>

      <SecondContainer>
        <RegionsContainer>
          <h5>Regions</h5>
          <img src={regionImg}/>
        </RegionsContainer>
        <FeedsContainer>
          <h5>Feeds</h5>
          <table >
            <FeedsTr1>
              <td><i class="fa fa-user w3-large" style={{ color: "#2196F3", fontSize: 18}}></i></td>
              <td>New record, over 90 views.</td>
              <td><i>10 mins</i></td>
            </FeedsTr1>
            <FeedsTr2>
              <td><i class="fa fa-bell w3-large" style={{ color: "#f44336" , fontSize: 18}}></i></td>
              <td>Database error.</td>
              <td><i>15 mins</i></td>
            </FeedsTr2>
            <FeedsTr1>
              <td><i class="fa fa-users w3-large" style={{ color: "#d2be0e" , fontSize: 18}}></i></td>
              <td>New record, over 40 users.</td>
              <td><i>17 mins</i></td>
            </FeedsTr1>
            <FeedsTr2>
              <td><i class="fa fa-comment w3-large" style={{ color: "#f44336" , fontSize: 18}}></i></td>
              <td>New comments.</td>
              <td><i>25 mins</i></td>
            </FeedsTr2>
            <FeedsTr1>
              <td><i class="fa fa-bookmark w3-large" style={{ color: "#2196F3" , fontSize: 18}}></i></td>
              <td>Check transactions.</td>
              <td><i>28 mins</i></td>
            </FeedsTr1>
            <FeedsTr2>
              <td><i class="fa fa-laptop w3-large" style={{ color: "#f44336" , fontSize: 18}}></i></td>
              <td>CPU overload.</td>
              <td><i>35 mins</i></td>
            </FeedsTr2>
            <FeedsTr1>
              <td><i class="fa fa-share-alt w3-large" style={{ color: "#4CAF50" , fontSize: 18}}></i></td>
              <td>New shares.</td>
              <td><i>39 mins</i></td>
            </FeedsTr1>
          </table>
        </FeedsContainer>
      </SecondContainer>

      <ThirdContainer>
        <GeneralStats>
          <h5>General Stats</h5>
          <p>New Visitors</p>
          <GrayDiv>
            <ColorDiv bgColor="#4CAF50" width="25%">+25%</ColorDiv>
          </GrayDiv>

          <p>New Users</p>
          <GrayDiv>
            <ColorDiv bgColor="#ff9800" width="50%">50%</ColorDiv>
          </GrayDiv>

          <p>Bounce Rate</p>
          <GrayDiv>
            <ColorDiv bgColor="#f44336" width="75%">75%</ColorDiv>
          </GrayDiv>
        </GeneralStats>
        <Countries>
          <h5>Countries</h5>
          <CountriesTable>
            <tr>
              <td>United States</td>
              <td>65%</td>
            </tr>
            <CountriesTr>
              <td>UK</td>
              <td>15.7%</td>
            </CountriesTr>
            <tr>
              <td>Russia</td>
              <td>5.6%</td>
            </tr>
            <CountriesTr>
              <td>Spain</td>
              <td>2.1%</td>
            </CountriesTr>
            <tr>
              <td>India</td>
              <td>1.9%</td>
            </tr>
            <CountriesTr>
              <td>France</td>
              <td>1.5%</td>
            </CountriesTr>
          </CountriesTable>
          <CountriesBtn>More Countries &nbsp;<i class="fa fa-arrow-right"></i></CountriesBtn>
        </Countries>
        <RecentUsers>
          <h5>Recent Users</h5>
          <UserContainer>
            <User>
              <img src={img2}/>
              <span>Mike</span>
            </User>
            <User>
              <img src={img5}/>
              <span>Jill</span>
            </User>
            <User>
              <img src={img6}/>
              <span>Jane</span>
            </User>
          </UserContainer>
        </RecentUsers>
        <RecentComments>
          <h5>Recent Comments</h5>

          <CommentsContainer>
            <img src={img3}/>
            <Comments>
              <h4>John <span class="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span></h4>
              <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Comments>
          </CommentsContainer>
          <CommentsContainer>
            <img src={imgH} style={{backgroundColor:"white"}}/>
            <Comments>
              <h4>Ha <span class="w3-opacity w3-medium">Mar 26, 2025, 11:28 PM</span></h4>
              <p>Sajucha dadle fighting eepnida!! guajaeboda jaemichnaeyo haha</p>
            </Comments>
          </CommentsContainer>

        </RecentComments>
      </ThirdContainer>
      <FourthContainer>
        <MiniContainer color="#4CAF50">
          <h5>Demographic</h5>
          <p>Language</p>
          <p>Country</p>
          <p>City</p>
        </MiniContainer>
        <MiniContainer color="#f44336">
          <h5>System</h5>
          <p>Browser</p>
          <p>OS</p>
          <p>More</p>
        </MiniContainer>
        <MiniContainer color="#ff9800">
          <h5>Target</h5>
          <p>Users</p>
          <p>Active</p>
          <p>Geo</p>
          <p>Interests</p>
        </MiniContainer>
      </FourthContainer>
      <Footer/>
    </Container>
    </>
);
}

export default App;

const Container = styled.div`
  width: calc(100% -300px);
  box-sizing: border-box;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f1f1f1;
  }
`;

const FirstContainer = styled.div`
  margin-left: 300px;
  margin-top:43px;
  padding:22px 16px;

  h5{
    padding-left:8px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin: 10px 0;
    font-size: 18px;
  }

  @media only screen and (max-width: 993px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 600px) {
    padding-right: 64px;
  }
`;

const DashBoardBoxes = styled.div`
  display:flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  //d옆으로
`;

const DashBoardBox = styled.div`
  width: 24.99999%;
  margin: 0 8px;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;

  padding:16px;

  background-color: ${(props) => props.bgColor || "gray"};
  color:white;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  h3{
    font-size: 24px;
    font-weight: 400;
    margin: 10px 0;
  }

  h4{
    font-size: 20px;
    font-weight: 400;
    margin: 10px 0;
  }
`;

const IconNumber = styled.div`
  display:flex;
  justify-content: space-between;
  i{
    font-size: 48px !important;
  }
`;

const SecondContainer = styled.div`
  margin-left: 300px;
  padding:0px 22px;

  display:flex;
  flex-direction: row;
  //긴화면 일대는 옆으로 정렬, 모바일은 세로 정렬

  @media only screen and (max-width: 993px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const RegionsContainer = styled.div`
  display:flex;
  flex-direction: column;//아래로

  width: 33.33333%; //모바일 일때는 100%
  padding-right:12px; // 모바일일때는 없애야함!
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  h5{
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin: 10px 0;
    font-size: 18px;
  }
`;

const FeedsContainer = styled.div`
  display:flex;
  flex-direction: column;//아래로

  table {
    border-collapse: collapse; // table 내에 테두리 없애기 !
  }

  width: 66.66666%; //모바일 일때는 100%
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  h5{
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin: 10px 0;
    font-size: 18px;
  }
`;

const FeedsTr1 = styled.tr`
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  line-height: 1.5;

  width:100%;
  height:38.5px;

  background-color:rgb(255, 255, 255);
  td{
    padding:8px;
    i{
      padding-left:8px;
    }
  }
`;

const FeedsTr2 = styled.tr`
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  line-height: 1.5;
  height:38.5px;

  background-color: #f1f1f1;

  td{
    padding:8px;
    i{
      padding-left:8px;
    }
  }
`;

const ThirdContainer = styled.div`
  margin-left: 300px;
  padding:0px 22px;

  display:flex;
  flex-direction: column;

  @media only screen and (max-width: 993px) {
    margin-left: 0px;
  }
`;

const GeneralStats = styled.div`
  font-family: "Raleway", sans-serif;
  p{
    font-size: 15px;
    line-height: 1.5;
  }

  h5{
    font-weight: 400;
    margin: 10px 0;
    font-size: 18px;
  }

  padding-bottom:40px;
`;

const GrayDiv = styled.div`
  background-color: #9e9e9e !important;
  height:38.5px;
`;

const ColorDiv = styled.div`
  background-color: ${(props) => props.bgColor || "gray"};
  width: ${(props) => props.width || "100%"};
  height:38.5px;

  display:flex;
  justify-content: center;
  align-items: center;
`;

const Countries = styled.div`
  font-family: "Raleway", sans-serif;
  h5{
    font-weight: 400;
    margin: 10px 0;
    font-size: 18px;
  }
`;

const CountriesTable = styled.table`
  background-color: #fff !important;
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse; // table 내에 테두리 없애기 !
  tr{
    font-size: 15px;
    line-height: 1.5;
    height:39.5px;
    &:hover {
      background-color:rgb(184, 184, 184);
      cursor: pointer;
    }
  }

  td{
    padding: 8px 8px;
    padding-left: 16px;
  }
`;

const CountriesTr = styled.tr`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f1f1f1;
  width: 100%;

  &:hover {
      background-color:rgb(184, 184, 184);
      cursor: pointer;
    }
`;

const CountriesBtn = styled.button`
  color: #fff !important;
  background-color: #616161 !important;
  padding: 8px 16px;
  border:none;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;

  font-family: "Raleway", sans-serif;
  font-size: 15px;
  line-height: 1.5;

  margin-top:16px;
  margin-bottom:40px;

  &:hover {
    background-color:rgb(213, 211, 211);
    color: rgb(31, 31, 31);
    cursor: pointer;
  }
`;

const RecentUsers = styled.div`
  font-family: "Raleway", sans-serif;
  h5{
    font-weight: 400;
    margin: 14px 0;
    font-size: 18px;
  }

  margin-bottom:40px;
`;

const UserContainer = styled.div`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  width:100%;
`;

const User = styled.div`
  height:48px;
  padding:16px;
  display: flex;
  align-items: center;
  img{
    border-radius: 50%;
    margin-right: 16px !important;
    width: 35px;
  }

  font-size: 24px !important;
  border-bottom: 1px solid #ddd;
  background-color: #fff !important;
`;

const RecentComments = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  h5{
    font-weight: 400;
    margin: 10px 0;
    font-size: 18px;
  }

  margin-bottom:40px;
`;

const CommentsContainer = styled.div`
  img{
    width: 96px;
    height: 96px;
    border-radius: 50%;
    margin-right:50px;
  }

  margin-top:16px;

  display:flex; 
  flex-direction: row;
  //모바일 일때 사진, 글 세로로 display:flex; flex-direction: column;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Comments = styled.div`
  display:flex;
  flex-direction: column;
  h4{
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;

    margin: 10px 0;
  }

  span{
    font-size: 15px !important;
    line-height: 1.5;
    opacity: 0.60;
  }
  p{
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.5;

    margin-top: 0px;
  }
`;

const FourthContainer = styled.div`
  margin-left: 300px;
  color: #fff !important;
  background-color: #616161 !important;

  padding-top: 32px !important;
  padding-bottom: 32px !important;
  padding: 0.01em 16px;

  display: flex;
  flex-direction: row;//모바일 column

  @media only screen and (max-width: 993px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-right: 48px;
  }
`;
const MiniContainer = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  line-height: 1.5;

  width: 33.33333%;
  padding: 0.01em 16px;
  h5{
    font-weight: 400;
    margin: 10px 0;
    font-size: 18px;
    border-bottom: 6px solid ${(props) => props.color || "black"};
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
