import styled from "styled-components";

export const ToTop = styled.img<{ showScroll: boolean }>`
  position: fixed;
  width: 70px;
  bottom: 70px;
  right: 30px;
  cursor: pointer;
  display: ${({ showScroll }) => (showScroll ? "block" : "none")};
  &:hover {
    transition: 0.2s;
    transform-origin: center;
    transform: scale(1.05);
  }
`;
