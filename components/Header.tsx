import Image from 'next/image'
import styled from 'styled-components'
import { Colors } from '../util/constant'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  padding: 15px 30px;
  justify-content: space-between;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: color 0.2s ease;
  color: ${Colors.textLight};

  &:hover {
    color: ${Colors.wafflePrimary};
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Image src='/images/icon_header.svg' alt='me' width='118' height='48' />
      <MenuContainer>
        <MenuItem>소개</MenuItem>
        <MenuItem>멤버</MenuItem>
        <MenuItem>연락처</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header