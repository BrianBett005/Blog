import React from "react";
import styled from "styled-components";
const Loader = () => {
  return (
    <Wrapper>
      <Spinner>
        <Ring />
        <Span>loading...</Span>
      </Spinner>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  /* background: #B2F6DE; */
  /* background: white; */
`;
const Ring = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: lightseagreen;
  animation: ring 2s linear infinite;
  @keyframes ring {
    0% {
      transform: rotate(0deg);
      box-shadow: 1px 5px 2px #e65c00;
    }
    25% {
      transform: rotate(90deg);
      box-shadow: 1px 6px 2px pink;
    }

    50% {
      transform: rotate(180deg);
      box-shadow: 1px 6px 2px #18b201;
    }
    75% {
      transform: rotate(270deg);
      box-shadow: 1px 6px 2px #e65c00;
    }
    100% {
      transform: rotate(360deg);
      box-shadow: 1px 5px 2px #e65c00;
    }
  }
`;
const Spinner = styled.div`
  display: flex;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  /* color: #737373; */
  font-size: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 1000;
  line-height: 200px;
  animation: fade 2s ease-in infinite;
  @keyframes fade {
    50% {
      color: green;
    }
  }
`;

export default Loader;
