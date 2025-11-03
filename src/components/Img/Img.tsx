import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  disabled?: boolean;
  backgroundColor?: string;
  width?: string;
  height?: string;
}>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  border-radius: 4px;

  @media (max-width: 768px) {
    width: ${(props) => (props.width ? `calc(${props.width} * 0.8)` : 'auto')};
    height: ${(props) =>
      props.height ? `calc(${props.height} * 0.8)` : 'auto'};
  }
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    />
  );
};

export default Img;
