import { PropsWithChildren } from 'react'
import styled from 'styled-components'

import { Colors } from 'util/constant'

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 197px;

  border-right: 2px solid #f8f5f1;

  &:last-of-type {
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
    margin-bottom: 20px;
    border: none;
  }
`

const Rectangle = styled.div<{ color?: string }>`
  position: absolute;
  top: 5%;
  left: calc(50% - 30px);
  display: block;

  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: ${({ color = '#ffffff' }) => color};
  overflow: hidden;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;

  @media (max-width: 768px) {
    left: 0px;
    top: 0px;
  }
`

const Name = styled.h3`
  position: absolute;
  left: 21%;
  right: 21%;
  top: 50%;
  bottom: 43.15%;

  color: ${Colors.textDark};
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  @media (max-width: 768px) {
    left: 76px;
    top: 0px;
    right: auto;
    bottom: auto;
  }
`

const Description = styled.p`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 76%;
  bottom: 0%;

  font-size: 16px;
  line-height: 19px;
  color: ${Colors.textLight};

  @media (max-width: 768px) {
    left: 76px;
    top: 32px;
    right: auto;
    bottom: auto;
  }
`

interface Props {
  className?: string
}

const Sponsor = ({ className, children }: PropsWithChildren<Props>) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

Sponsor.Rectangle = Rectangle
Sponsor.Name = Name
Sponsor.Description = Description

export default Sponsor
