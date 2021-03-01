import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from 'util/constant'
import DownloadLink from 'components/Common/DownloadLink'

const Wrapper = styled.div<{ back: string }>`
  display: flex;
  align-items: center;
  border-radius: 50px;
  width: 780px;
  height: 520px;
  background: url(${(props) => props.back});

  @media (max-width: 768px) {
    width: 100%;
    height: 0;
    padding-top: 150%;
    flex-direction: column;
    align-self: center;
    border: solid 1px red;
  }
`

const ImagePanel = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    border: solid 1px red;
    margin-top: 30px;
    justify-content: center;
  }
`

const TextPanel = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  font-weight: lighter;

  h1 {
    font-size: 40px;
    color: ${Colors.backLight};
  }

  h2 {
    margin-right: 150px;
    font-size: 20px;
    color: ${Colors.backLight};
  }

  h3 {
    margin-right: 150px;
    margin-top: 90px;
    font-size: 16px;
    color: ${Colors.backLight};
  }

  @media (max-width: 768px) {
    border: solid 1px red;
    h1 {
      margin-left: 10px;
      font-size: 60px;
    }

    h2 {
      margin: 10px auto;
      font-size: 28px;
    }

    h3 {
      margin: 30px 0px;
      font-size: 24px;
    }
  }
`

interface ServiceItemProps {
  backgroundImage: string
  title: string
  subtitle: string
  description: string
}

const ServiceItem = ({
  backgroundImage,
  title,
  subtitle,
  description,
}: ServiceItemProps) => {
  return (
    <Wrapper back={backgroundImage}>
      <ImagePanel>
        <Image src="/images/siksha_mock.png" width="180px" height="360px" />
      </ImagePanel>
      <TextPanel>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{description}</h3>
        <DownloadLink />
      </TextPanel>
    </Wrapper>
  )
}

export default ServiceItem
