import React from "react";
import styled from "styled-components";
const Account = () => {
  return (
    <Wrapper>
      <ImageContainer></ImageContainer>
      <InfoContainer>Account page...</InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div``;

const ImageContainer = styled.div``;

export default Account;
