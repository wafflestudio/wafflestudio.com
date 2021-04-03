import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const MarginImage = styled(Image)`
  margin: 8px;
`

const DownloadLink = ({ playStore, appStore }) => {
  return (
    <Wrapper>
      <a href={playStore}>
        <Image
          alt="다운로드하기 Google Play"
          src="/images/google_play_download.svg"
          width="133px"
          height="51px"
        />
      </a>
      <a href={appStore}>
        <MarginImage
          alt="다운로드하기 AppStore"
          src="/images/app_store_download.svg"
          width="112px"
          height="35px"
        />
      </a>
    </Wrapper>
  )
}

export default DownloadLink
