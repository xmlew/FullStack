import React from "react";
import styled from "styled-components";
import "../../App.css";


// Styled Div for parts of the frontend.
const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 350%;
  top: 0;
  left: 0;
  background-color: #1135dd10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #27b927;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #000000;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 2em;
  color: #000000;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 28%;
  text-align: center;
`;

const SearchButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

const Slogan2 = styled.h4`
  color: #000000;
  font-weight: 700;
  font-size: 30px;
  margin-top: 130px;
`;

//Exports the top section into App.js
export function TopSection() {

  return (
    <TopSectionContainer>
      <Logo>Benchmark</Logo> 
      <Slogan>Mapping Accountability, One Building at a time.</Slogan>
      <Paragraph>
        Singapore's journey to becoming a Green City starts with you.
        With Benchmark, you enjoy a reliable and easy to use sustainability
        insights platform to better address your buildings' environmental impacts.
      </Paragraph>
        <SearchButton>
        Search
        </SearchButton>
        <SearchButton>
          3D View
        </SearchButton>
      <Slogan2>
        Your Insights have been calculated.
      </Slogan2>
    </TopSectionContainer>
  );
}
