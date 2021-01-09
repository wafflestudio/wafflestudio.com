import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Colors } from 'util/constant'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  padding: 15px 30px;
  justify-content: space-between;
  
  img:hover {
    cursor: pointer;
  }
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const MenuItem = styled.div`
  display: flex;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: color 0.2s ease;
  color: ${Colors.textLight};

  &:hover {
    cursor: pointer;
    color: ${Colors.wafflePrimary};
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src='/images/icon_header.svg' alt='me' width='118' height='48' />
      </Link>
      <MenuContainer>
        <Link href='/'>
          <MenuItem>소개</MenuItem>
        </Link>
        <Link href='/people'>
          <MenuItem>멤버</MenuItem>
        </Link>
        <Link href='/contact'>
          <MenuItem>연락처</MenuItem>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header