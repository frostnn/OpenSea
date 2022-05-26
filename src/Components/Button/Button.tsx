import styled from 'styled-components';
import { iBtn, iBtnStyle } from './types';

const Btn = styled.button<iBtnStyle>`
  color: ${({ color }) => (color ? color : 'rgb(255, 255, 255)')};
  background-color: ${({ bg }) => (bg ? bg : 'rgb(32, 129, 226)')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '600')};
  padding: ${({ padding }) => (padding ? padding : '12px 20px')};
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : 'rgb(32, 129, 226)')};
  cursor: pointer;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '10px')};
  width: ${({ width }) => (width ? width : '167px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  :hover {
    opacity: 0.8;
  }
`;
const Button: React.FC<iBtn> = ({
  text,
  color,
  bg,
  borderColor,
  padding,
  fontSize,
  fontWeight,
  width,
  borderRadius,
  margin,
  onClickFn,
}) => {
  return (
    <Btn
      onClick={onClickFn ? onClickFn() : undefined}
      color={color}
      bg={bg}
      borderColor={borderColor}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      borderRadius={borderRadius}
      margin={margin}>
      {text}
    </Btn>
  );
};
export default Button;
