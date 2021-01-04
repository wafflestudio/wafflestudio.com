import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Image src='/images/icon_header.svg' alt='me' width='118' height='48' />
      <MenuContainer>
        <div>소개</div>
        <div>멤버</div>
        <div>연락처</div>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header