import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AccountIcon } from '../../assets/img/accountIcon.svg';
import Menu from './Menu';

const AccountIconWrapper = styled.div`
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

const Account: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const toggleVisibility = (boo: boolean) => setVisible(boo);
  return (
    <AccountIconWrapper
      onMouseEnter={() => toggleVisibility(true)}
      onMouseLeave={() => toggleVisibility(false)}>
      <AccountIconStyle />
      <Menu visibility={visible} listItem={['test', 'test2']} />
    </AccountIconWrapper>
  );
};
export default Account;
