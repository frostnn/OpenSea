import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { iMainContent, iBg } from './types';
import { ReactComponent as AccountIcon } from '../../assets/img/moreIcon.svg';
import Card from './MainContentCard';
import img from '../../assets/img/mainContImg.jpg';
import icon from '../../assets/img/icon.jpg';
import Wrapper from '../../Container/Wrapper';

const MainBgWrapper = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
`;
const MainBg = styled.div<iBg>`
  background-size: cover;
  background-color: rgb(255, 255, 255);
  background-position: center center;
  opacity: 0.3;
  filter: blur(8px);
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  height: 586px;
  -webkit-mask: linear-gradient(rgb(255, 255, 255), transparent);
`;

/*    */
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  position: relative;
`;
const LeftContent = styled.div`
  width: 100%;
`;

const RightContent = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  color: rgb(4, 17, 29);
`;
const SubTitle = styled.div`
  font-size: 24px;
  text-align: left;
  color: rgb(53, 56, 64);
  max-width: 400px;
`;

const LinkWrapper = styled.div`
  height: 100%;
  max-height: 150px;
  display: flex;
  align-items: end;
`;
const Link = styled.a`
  font-weight: 600;
  color: rgb(32, 129, 226);
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 125px;
  :hover {
    opacity: 0.8;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 40px;
`;

const AccountIconStyle = styled(AccountIcon)`
  margin-right: 5px;
  width: 25px;
  height: 25px;
`;
const MainContent: React.FC<iMainContent> = ({ title, subTitle }) => {
  return (
    <>
      <MainBgWrapper>
        <MainBg bg={img} />
      </MainBgWrapper>
      <Wrapper>
        <Container>
          <LeftContent>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <BtnWrapper>
              <Button text={'Explore'} margin={'0px 10px 0px 0px'} />
              <Button
                text={'Create'}
                bg={'#fff'}
                color={'rgb(32,129,226)'}
                margin={'0px 0px 0px 10px'}
              />
            </BtnWrapper>
            <LinkWrapper>
              {' '}
              <Link>
                <AccountIconStyle />
                Learn more about OpenSea
              </Link>
            </LinkWrapper>
          </LeftContent>
          <RightContent>
            <Card img={img} titleImg={'Life as is #18'} author={'naibovisuals'} authorIcon={icon} />
          </RightContent>
        </Container>
      </Wrapper>
    </>
  );
};

export default MainContent;
