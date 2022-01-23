import React from 'react';
import styled from 'styled-components';
import Account from './Account';
import Logotype from './Logotype';
import NavBarItem from './NavBarItem';
import Search from './Search';
import { ReactComponent as ArtIcon } from '../../assets/menuIcon/artIcon.svg';

export interface iNavItems {
  menuItem: string;
  subMenuItem?: string[];
  icon?: React.ReactComponentElement<any>;
}
const HeaderNavBar = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
`;
const NavBarList = styled.ul`
  display: flex;
  margin: 0px;
  list-style: none;
  padding: 0;
`;

const ArtIconStyle = styled(ArtIcon)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
/* {
  title: 'All NFTs',
  icon: <ArtIconStyle />,
},        {
  title: 'Collectibles',
  icon: <ArtIconStyle />,
},        {
  title: 'Domain Names',
  icon: <ArtIconStyle />,
},        {
  title: 'Music',
  icon: <ArtIconStyle />,
},        {
  title: 'Photography',
  icon: <ArtIconStyle />,
},        {
  title: 'Sports',
  icon: <ArtIconStyle />,
},        {
  title: 'Trading cards',
  icon: <ArtIconStyle />,
},
,        {
  title: 'Utility',
  icon: <ArtIconStyle />,
},
,        {
  title: 'Virtual Worlds',
  icon: <ArtIconStyle />,
}, */

const NavBar: React.FC = () => {
  const navItems: iNavItems[] = [
    {
      menuItem: 'Explore',
      subMenuItem: [
        'All NFTs',
        'Art',
        'Collectibles',
        'Domain Names',
        'Music',
        'Photography',
        'Sports',
        'Trading cards',
        'Utility',
        'Virtual Worlds',
      ],
      icon: <ArtIconStyle />,
    },
    { menuItem: 'Stats', subMenuItem: ['Ranking', 'Activity'], icon: <ArtIconStyle /> },
    {
      menuItem: 'Resources',
      subMenuItem: ['Blog', 'Partners', 'Docs', 'Help Center', 'Platform Status', 'Newletter'],
      icon: <ArtIconStyle />,
    },
    { menuItem: 'Create' },
  ];

  return (
    <HeaderNavBar>
      <Logotype />
      <Search />
      <NavBarList>
        {navItems.map((item) => (
          <NavBarItem {...item} />
        ))}
        <Account />
      </NavBarList>
    </HeaderNavBar>
  );
};
export default NavBar;
