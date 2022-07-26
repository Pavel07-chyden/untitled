import styled from "styled-components";
import { useState } from "react";
import { RowOne, RowTwo } from "../Row.style";

export const Container: React.FC = (children): any => {
  const [openTrue, setOpenTrue] = useState<boolean>(false);
  const isOpenClick = openTrue ? `${RowOne} ${RowTwo}` : `${RowOne}`;
  return (
    <ContainerButton onClick={() => setOpenTrue(!openTrue)}>
      <Span />
    </ContainerButton>
  );
};

export const ContainerButton = styled.button`
   {
    width: 26px;
    height: 26px;
    border: none;
    outline: transparent;
    background-color: grey;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  & span {
    display: block;
    height: 2px;
    width: 20px;
    background-color: white;
    position: relative;
  }
  .button span::after,
  .button span::before {
    content: "";
    position: absolute;
    left: 0;
    height: 2px;
    width: 20px;
    background-color: white;
  }
  .button span::after {
    transform: translateY(-300%);
  }

  .button span::before {
    transform: translateY(300%);
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const Span = styled.span``;
