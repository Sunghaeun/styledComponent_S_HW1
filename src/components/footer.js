import React from "react";
import styled from "styled-components";

function Footer() {
  return(
    <FooterContainer>
      <h4>FOOTER</h4>
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-left: 300px;

  color: #000 !important;
  background-color: #f1f1f1 !important;
  font-family: "Raleway", sans-serif;

  padding:16px 22px;


  h4{
    font-weight: 400;
    margin: 10px 0;
    font-size: 20px;
  }

  p{
    font-size: 15px;
    line-height: 1.5;
  }

  a{
    color: #000 !important;
  }
`;