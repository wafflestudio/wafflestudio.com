import styled from 'styled-components'


const Wrapper = styled.div`
  border-radius: 50px;
  width: 100%;
  height: 520px;
  background: rgb(240, 151, 94);
  background: linear-gradient(160deg, rgba(240, 151, 94, 1) 32%, rgba(237, 133, 115, 1) 100%);
`

const TextPannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ServiceItem = () => {


  return (
    <Wrapper>
      <h1>TODO</h1>
    </Wrapper>
  )

}

export default ServiceItem