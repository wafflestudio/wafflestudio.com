import styled from 'styled-components'
import { Colors } from 'util/constant'
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
  margin-left: 50px;
  font-size: 16px;
  line-height: 20px;
  font-weight: lighter;
  text-align: left;
  color: ${Colors.textLight};

  a {
    color: ${Colors.textLight};
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 12px;

    .mobile-only {
      display: block;
    }
  }
`

const IconContainer = styled.div`
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 20px;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <TextContainer>
        서울특별시 관악구 관악로 1 <br className="mobile-only" />
        서울대학교 공과대학 301-314 <br />
        <a href="mailto:master@wafflestudio.com">
          master@wafflestudio.com
        </a>{' '}
        <br />
        Developed by sanggggg, ars-ki-00, qrid
      </TextContainer>
      <IconContainer>
        <Image src="/images/icon_header.svg" alt="me" width="118" height="48" />
      </IconContainer>
    </Wrapper>
  )
}

export default Footer
