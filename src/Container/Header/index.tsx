import styled from 'styled-components';
import NavBar from '../../Components/Header/NavBar';

const Header = styled.header`
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  max-width: 100vw;
  height: 72px;
  position: sticky;
  top: 0px;
  z-index: 110;
  transition: top 0.5s ease 0s;
  background-color: rgb(255, 255, 255);
`;
const HeaderPage: React.FC = () => {
  return (
    <Header>
      <NavBar />
    </Header>
  );
};
export default HeaderPage;
