import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from '../../../util/constant'
import DownloadLink from '../../common/DownloadLink'

const Wrapper = styled.div<{ back: String }>`
  display: flex;
  align-items: center;
  border-radius: 50px;
  width: 780px;
  height: 520px;
  background: url(${(props) => props.back});
`

const ImagePanel = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
    color: ${Colors.backLight}
  }

  h2 {
    margin-right: 150px;
    font-size: 20px;
    color: ${Colors.backLight}
  }

  h3 {
    margin-right: 150px;
    margin-top: 90px;
    font-size: 16px;
    color: ${Colors.backLight}
  }
`

interface ServiceItemProps {
  backgroundImage: string,
  title: string,
  subtitle: string,
  description: string
}

const ServiceItem = ({ backgroundImage, title, subtitle, description }: ServiceItemProps) => {
  return (
    <Wrapper back={backgroundImage}>
      <ImagePanel>
        <Image src='/images/siksha_mock.png' width='180px' height='360px' />
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