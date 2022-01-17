import styled from 'styled-components';
import Logotype from './Logotype';
import NavBarItem from './NavBarItem';
import Search from './Search';

const HeaderNavBar = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
`;
const NavBar: React.FC = () => {
  return (
    <HeaderNavBar>
      <Logotype />
      <Search />
      <NavBarItem />
    </HeaderNavBar>
  );
};
export default NavBar;
