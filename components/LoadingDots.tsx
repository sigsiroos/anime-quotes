import React from "react";
import styled, { keyframes } from "styled-components";

function LoadingDots() {
  return (
    <Loading>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Loading>
  );
}

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
`;

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
`;

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  > div:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  > div:nth-child(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  > div:nth-child(3) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  > div:nth-child(4) {
    left: 8px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`;

export default LoadingDots;
