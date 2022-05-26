import React from 'react';
import styled from 'styled-components';
import { iMainContentCard } from './types';
import { ReactComponent as InfoIcon } from '../../assets/img/infoIcon.svg';

const Container = styled.article`
  max-width: 550px;
  margin-right: 30px;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 10px 0px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transition: box-shadow 0.3s ease-in 0s;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 50px 0px;
  }
`;
const CardContent = styled.a``;
const CardContentImg = styled.div`
  height: 420px;
  border-bottom: 1px solid rgb(229, 232, 235);
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const CardContentInfo = styled.footer`
  width: 100%;
  font-weight: 600;
  padding: 16px;
  color: rgb(53, 56, 64);
  text-align: left;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardContentInfoUser = styled.div`
  display: flex;
  align-items: center;
`;
const TitleImg = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: rgb(4, 17, 29);
`;
const Author = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: rgb(32, 129, 226);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.div`
  overflow: hidden;
  border: 1px solid rgb(229, 232, 235);
  border-radius: 50%;
  padding: 0px;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;
const AuthorIcon = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

const AdditionalBtn = styled.button`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  font-size: 100%;
  font-family: inherit;
  border: 0px;
  padding: 0px;
  background: inherit;
  position: relative;
  transition: 0.2s;
  :before {
    content: 'Get featured on the homepage';
    position: absolute;
    width: 220px;
    background: rgb(4, 17, 29);
    color: #fff;
    padding: 10px;
    top: calc(50% - 60px);
    right: calc(50% - 115px);
    border-radius: 10px;
    font-size: 14px;
    display: none;
  }
  :hover:before {
    display: block;
  }
`;
const InfoIconStyle = styled(InfoIcon)`
  width: 23px;
  height: 23px;
`;

const Card: React.FC<iMainContentCard> = ({ titleImg, author, authorIcon, img }) => {
  return (
    <Container>
      <CardContent>
        <CardContentImg>
          <Img src={img} />
        </CardContentImg>
        <CardContentInfo>
          <CardContentInfoUser>
            <Icon>
              <AuthorIcon src={authorIcon} />
            </Icon>
            <Info>
              <TitleImg>{titleImg}</TitleImg>
              <Author>{author}</Author>
            </Info>
          </CardContentInfoUser>
          <AdditionalBtn>
            <InfoIconStyle />
          </AdditionalBtn>
        </CardContentInfo>
      </CardContent>
    </Container>
  );
};

export default Card;
