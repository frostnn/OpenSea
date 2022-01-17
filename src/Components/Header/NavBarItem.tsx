import styled from 'styled-components';
import Account from './Account';

const NavBarList = styled.ul`
  display: flex;
  margin: 0px;
  list-style: none;
  padding: 0;
`;
const NavBarListItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 80px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  flex-shrink: 0;
  padding: 0px 20px;
  color: rgba(4, 17, 29, 0.75);
  transition: 0.2s;
  :hover {
    color: rgb(4, 17, 29);
  }
`;
const NavBarItem: React.FC = () => {
  const navItem = ['Explore', 'Stats', 'Resources', 'Create'];
  return (
    <NavBarList>
      {navItem.map((item) => (
        <NavBarListItem key={item}>{item}</NavBarListItem>
      ))}
      <Account />
    </NavBarList>
  );
};
export default NavBarItem;
