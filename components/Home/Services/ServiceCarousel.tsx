import ServiceItem from './ServiceItem'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { isMobile } from 'util/device'

const CarouselWrapper = styled.div`
  width: 780px;
  .carousel .slide {
    background: none;
  }

  .carousel.carousel-slider .control-arrow {
    background: none !important;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-self: center;

    button {
      display: none;
    }
  }
`

const ServiceCarousel = ({ userAgent }) => {
  return (
    <CarouselWrapper>
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        swipeable
      >
        <ServiceItem
          backgroundImage={
            isMobile(userAgent || window.navigator)
              ? '/images/siksha_back_mobile.svg'
              : '/images/siksha_back.png'
          }
          title={'식샤'}
          subtitle={'서울대학교 학식 메뉴는\n식샤로 체크하세요'}
          description={
            '서울대 학내의 모든 학식 메뉴들과\n평점들을 식샤에서 확인해보세요.'
          }
          src={'/images/siksha_mock.png'}
          appStore="https://apps.apple.com/kr/app/식샤-서울대학교-식단-앱/id1032700617"
          playStore="https://apps.apple.com/kr/app/식샤-서울대학교-식단-앱/id1032700617"
        />
        <ServiceItem
          backgroundImage={
            isMobile(userAgent || window.navigator)
              ? '/images/snutt_back_mobile.png'
              : '/images/snutt_back.svg'
          }
          title={'SNUTT'}
          subtitle={'서울대학교 시간표 작성!'}
          description={'새로워진 서울대학교 시간표 앱,\nSNUTT를 만나보세요!'}
          src={'/images/snutt_mock.png'}
          appStore="https://apps.apple.com/kr/app/snutt-서울대학교-시간표-앱/id1215668309"
          playStore="https://play.google.com/store/apps/details?id=com.wafflestudio.snutt2.live&hl=ko&gl=US"
        />
      </Carousel>
    </CarouselWrapper>
  )
}

export default ServiceCarousel

export async function getServerSideProps(context) {
  return {
    props: {
      userAgent: context.req.headers['user-agent'],
    },
  }
}
