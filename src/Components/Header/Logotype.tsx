import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/img/logoIcon.svg';
import { ReactComponent as LogoText } from '../../assets/img/logoText.svg';

const Logo = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  padding-right: 16px;
`;
const LinlMainPage = styled.a`
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  height: 100%;
  padding: 8px 0px;
  position: relative;
`;
const LogoTextStyle = styled(LogoText)`
  margin: 4px 0 0 10px;
`;
const Logotype: React.FC = () => {
  return (
    <Logo>
      <LinlMainPage href="/">
        <LogoIcon width="40px" height="40px" />
        <LogoTextStyle />
      </LinlMainPage>
    </Logo>
  );
};
export default Logotype;
