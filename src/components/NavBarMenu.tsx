import styled from "styled-components";

export interface TitleValue {
  value: string;
}

type Props = {
  extendNavbar: boolean;
  setextendNavbar: any;
  items: TitleValue[];
};

const NavbarMenu: React.FC<Props> = ({ items, setextendNavbar }) => {
  return (
    <NameMenu onClick={() => setextendNavbar(false)}>
      <NavBarBlur>
        <MenuContent>
          <Main>
            <UlNavbar>
              {items.map((item, index) => (
                <NavbarLi key={index}>
                  <SpanTitle>{item.value}</SpanTitle>
                </NavbarLi>
              ))}
            </UlNavbar>
          </Main>
        </MenuContent>
      </NavBarBlur>
    </NameMenu>
  );
};

const UlNavbar = styled.ul`
  color: white;
  text-decoration: none;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const NavbarLi = styled.li`
  color: white;
  text-decoration: none;
  align-items: center;
  text-align: center;
  display: flex;
  margin: 10px 0;
`;

const Main = styled.main`
  padding: 99px 75px;
`;

const NameMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 10vh;
  top: 50px;
  left: 0;
  transform: translateX(-100%);
  extendNavbar {
    transform: translateX(0);
  }
`;

export const NavBarBlur = styled.div`
  width: 100vw;
  height: 60vh;
  left: 300px;
  position: absolute;
`;

export const MenuContent = styled.div`
  height: 675px;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SpanTitle = styled.div`
  display: flex;
  padding: 5px;
  font-size: 2rem;
  color: green;
`;

export default NavbarMenu;
