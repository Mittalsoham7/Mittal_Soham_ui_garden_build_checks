import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || '#000'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0 0 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor,
  title,
  subtitle,
}) => {
  return (
    <HeroContainer disabled={disabled} backgroundColor={backgroundColor}>
      <HeroImg src={src} alt={alt} />
      {(title || subtitle) && (
        <Overlay>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Overlay>
      )}
    </HeroContainer>
  );
};

export default HeroImage;
