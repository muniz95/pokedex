import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from { background: #eee;}
  to { background: #e74c3c; }
`;

const shake = keyframes`
  0 { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg); }
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
`;

const fall = keyframes`
  0% { top: -200px }
  60% { top: 0 }
  80% { top: -20px }
  100% { top: 0 }
`;

export const CenterOnPage = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  height: 2em;
  width: 0;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);

  background-color: grey;
`;

export const Pokeball = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: ${fall} 0.25s ease-in-out,
    ${shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background: #000;
  }
`;

export const PokeballButton = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 50px;
  height: 50px;
  background: #7f8c8d;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
  animation: ${blink} 0.5s alternate 7;
`;

const components = {
  CenterOnPage,
  Pokeball,
  PokeballButton,
};

export default components;
