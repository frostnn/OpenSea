import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { iNavBarItem } from './types';

const NavBarListItemWrapper = styled.div`
  position: relative;
`;
const NavBarListItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 80px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
  padding: 0px 20px;
  color: rgba(4, 17, 29, 0.75);
  transition: 0.2s;
  :hover {
    color: rgb(4, 17, 29);
  }
`;
const NavBarItem: React.FC<iNavBarItem> = ({ menuItem, subMenuItem, icon }) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const toggleVisibility = (boo: boolean) => setVisible(boo);

  return (
    <NavBarListItemWrapper
      onMouseEnter={() => toggleVisibility(true)}
      onMouseLeave={() => toggleVisibility(false)}>
      <NavBarListItem>{menuItem}</NavBarListItem>
      {subMenuItem && <Menu listItem={subMenuItem} visibility={visible} icon={icon} />}
    </NavBarListItemWrapper>
  );
};
export default NavBarItem;
