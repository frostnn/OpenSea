import React from 'react';
import styled from 'styled-components';
import { IShow, iMenu } from './types';

const MenuList = styled.ul<IShow>`
  visibility: ${({ show }) => (!show ? 'hidden' : 'visible')};
  position: absolute;
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
  transition: 0.1s;
  max-height: 640px;
`;
const MenuListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  padding: 18px;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid rgb(229, 232, 235);
  }
  &:hover {
    transition: all 0.1s ease 0s;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    background-color: rgb(251, 253, 255);
  }
`;

const Menu: React.FC<iMenu> = ({ visibility, listItem, icon }) => {
  return (
    <MenuList show={visibility}>
      {listItem.map((item: string) => (
        <MenuListItem>
          {icon}
          {item}
        </MenuListItem>
      ))}
    </MenuList>
  );
};
export default Menu;
