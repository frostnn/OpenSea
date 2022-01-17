import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AccountIcon } from '../../assets/img/accountIcon.svg';

interface IVisibility {
  visibility: boolean;
  listItem: any;
}
interface IShow {
  show: boolean;
}
const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  color: rgba(4, 17, 29, 0.75);
  transition: 0.2s;
  position: relative;
  :hover {
    color: rgb(4, 17, 29);
  }
`;
const AccountIconStyle = styled(AccountIcon)`
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;
/*  */
const MenuList = styled.ul<IShow>`
  visibility: ${({ show }) => (!show ? 'hidden' : 'visible')};
  position: fixed;
  margin: 0px;
  list-style: none;
  border: 1px solid rgb(229, 232, 235);
  border-radius: 10px;
  top: 73px;
  right: 30px;
  max-height: 350px;
  overflow-y: auto;
  box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px;
  background-color: rgb(255, 255, 255);
  color: rgb(4, 17, 29);
  max-width: initial;
  min-width: 220px;
  padding: 0;
  transition: 0.2s;
`;
const MenuListItem = styled.li`
  width:100%
  font-weight: 600;
  padding: 16px;
  cursor:pointer;
  &:hover {
    transition: all 0.2s ease 0s;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    background-color: rgb(251, 253, 255);
  }
`;
const Menu: React.FC<IVisibility> = ({ visibility, listItem }) => {
  return (
    <MenuList show={visibility}>
      {listItem.map((item: string) => (
        <MenuListItem>{item}</MenuListItem>
      ))}
    </MenuList>
  );
};
export default Menu;
