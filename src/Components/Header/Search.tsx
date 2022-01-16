import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/img/searchIcon.svg';

interface IFocus {
  focus: boolean;
}
const SearchBlock = styled.div<IFocus>`
  cursor: text;
  display: flex;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 1px solid rgb(229, 232, 235);
  width: 100%;
  padding: 12px;
  height: 45px;
  max-width: 768px;
  ${({ focus }) => focus && 'box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px'}
`;

const SearcIconStyle = styled(SearchIcon)`
  justify-content: center;
  display: flex;
  margin-right: 8px;
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  :focus + ${SearcIconStyle} {
  }
`;

const Search = () => {
  const [focus, setFocus] = React.useState<boolean>(false);
  const toggleFocus = (boo: boolean): void => setFocus(boo);
  return (
    <SearchBlock focus={focus}>
      <SearcIconStyle />
      <SearchInput
        type="text"
        placeholder="Search items, collections, and accounts"
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
      />
    </SearchBlock>
  );
};

export default Search;
