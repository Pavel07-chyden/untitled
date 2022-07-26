import styled from "styled-components";
import { useState } from "react";

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState<boolean>(false);
  return (
    //@ts-ignore
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>About</NavbarLink>
          <NavbarLink>Contacts</NavbarLink>
          <NavbarLink>Price</NavbarLink>
          <OpenLinkButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinkButton>
        </LeftContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended>Home</NavbarLinkExtended>
          <NavbarLinkExtended>About</NavbarLinkExtended>
          <NavbarLinkExtended>Contacts</NavbarLinkExtended>
          <NavbarLinkExtended>Price</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav<{ extendNavbar: boolean }>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: gray;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: flex-end;
  padding-left: 50px;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const NavbarLink = styled.h1`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 2000px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled.h1`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const OpenLinkButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 2000px) {
    display: none;
  }
`;
export default NavBar;
