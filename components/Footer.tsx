import styled from 'styled-components'
import { Colors } from '../util/constant'
import Image from 'next/image'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-top: 100px;
  background: ${Colors.backDark};
`

const TextContainer = styled.div`
  margin-left: 100px;
  font-size: 16px;
  font-weight: lighter;
  text-align: left;
  color: ${Colors.textLight};
`

const IconContainer = styled.div`
  margin-right: 100px;
`

const Footer = () => {
  return (
    <Wrapper>
      <TextContainer>
        서울특별시 어쩌구 저쩌구 <br />
        master@wafflestudio.com <br />
        Developed by sanggggg, ars-ki-00
      </TextContainer>
      <IconContainer>
        <Image src='/images/icon_header.svg' alt='me' width='118' height='48' />
      </IconContainer>
    </Wrapper>
  )

}

export default Footer