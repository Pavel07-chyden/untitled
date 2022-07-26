import styled from "styled-components";
import { useState } from "react";
import NavbarMenu from "../NavBarMenu";
import { Icon } from "../icons/Icon";

const NavBarB = () => {
  const [extendNavbar, setExtendNavbar] = useState<boolean>(false);
  const items = [{ value: "About" }, { value: "Contacts" }, { value: "Price" }];
  return (
    <>
      <NavbarContainer>
        <OpenLinkButton
          onClick={() => {
            setExtendNavbar(() => !extendNavbar);
          }}
        >
          {extendNavbar ? (
            <> &#8801;</>
          ) : (
            <Icon name={"grid-white"} width="19px" height="19px" />
          )}
        </OpenLinkButton>

        {extendNavbar && (
          <NavbarMenu
            extendNavbar={extendNavbar}
            setextendNavbar={setExtendNavbar}
            items={items}
          />
        )}
      </NavbarContainer>
    </>
  );
};
const NavbarContainer = styled.nav`
  height: 50px;
  max-width: 1200px;
  position: fixed;
  z-index: 50;
  display: flex;
  align-items: center;
  background-color: gray;
`;

export const OpenLinkButton = styled.button`
  width: 70px;
  height: 50px;
  margin-left: 20px;
  position: relative;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  transition: all 1.1s;
`;
export default NavBarB;
