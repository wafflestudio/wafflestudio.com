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
    height: 642px;
    flex-direction: column;
    padding: 50px 0;
  }
`

const ImagePanel = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    img {
      width: 210px;
      height: 321px;
    }
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
    width: 80%;
    h1 {
      margin: 10px 0;
      font-size: 40px;
    }

    h2 {
      margin: 5px 0;
      font-size: 20px;
    }

    h3 {
      margin: 0 0 15px;
      font-size: 16px;
    }
  }
`

interface ServiceItemProps {
  backgroundImage: string
  title: string
  subtitle: string
  description: string
  src: string
}

const ServiceItem = ({
  backgroundImage,
  title,
  subtitle,
  description,
  src,
}: ServiceItemProps) => {
  return (
    <Wrapper back={backgroundImage}>
      <ImagePanel>
        <Image src={src} width="180" height="360" />
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
