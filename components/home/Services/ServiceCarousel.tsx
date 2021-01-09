import ServiceItem from './ServiceItem'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselWrapper = styled.div`
  width: 780px;
  .carousel .slide { background: none; }
`

const ServiceCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel showStatus={false} autoPlay infiniteLoop swipeable>
        <ServiceItem
          backgroundImage={'/images/siksha_back.png'}
          title={'식샤'}
          subtitle={'서울대학교 학식 메뉴는 식샤로 체크하세요'}
          description={
            '서울대 학내의 모든 학식 메뉴들과 평점들을 식샤에서 확인해보세요.'
          }
        />
        <ServiceItem
          backgroundImage={'/images/snutt_back.svg'}
          title={'SNUTT'}
          subtitle={'서울대학교 학식 메뉴는 식샤로 체크하세요'}
          description={
            '울대 학내의 모든 학식 메뉴들과 평점들을 식샤에서 확인해보세요.'
          }
        />
      </Carousel>
    </CarouselWrapper>
  )
}

export default ServiceCarousel
