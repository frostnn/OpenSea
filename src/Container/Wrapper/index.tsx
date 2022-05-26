import styled from 'styled-components';

const WrapperBlock = styled.div`
  margin: 0px auto;
  max-width: min(1280px, 100% - 40px);
  width: 100%;
  flex-wrap: wrap;
`;

const Wrapper: React.FC = ({ children }) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};
export default Wrapper;
