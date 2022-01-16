import styled from 'styled-components';
import Logotype from './Logotype';
import Search from './Search';

const HeaderNavBar = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
`;
const NavBar = () => {
  return (
    <HeaderNavBar>
      <Logotype />
      <Search />
    </HeaderNavBar>
  );
};
export default NavBar;
