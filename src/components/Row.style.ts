import styled from "styled-components";


export const RowOne = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  background-color: silver;
  width: 150px;
  display: flex;
  flex-direction: column;
  transform: translateX(calc(-100% + 40px));
  transition: all .3s linear;
`
export const RowTwo = styled.div`
  transform: translateX(0);

`