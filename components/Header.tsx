import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Colors } from 'util/constant'
import { useState } from 'react'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  padding: 15px 30px;
  justify-content: space-between;

  img:hover {
    cursor: pointer;
  }

  // For floating Header
  position: sticky;
  top: 0;
  background: ${Colors.backLight};
  opacity: 90%;
  width: 100vw;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100vw;
    box-shadow: 0 5px 5px ${Colors.backDark};
  }
`
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuContainer = styled.div<{menuOpen: boolean}>`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    flex-direction: column;
    padding-top: 10px;
  }
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
  @media (max-width: 768px) {
    margin: 10px 0px;
    justify-content: left;
    font-size: 4vmin;
  }
`

const OverlayBox = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0; left: 0; bottom: 0; right: 0;
  width: 100%;
  height: 100%;
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <IconContainer>
          <Link href='/'>
            <Image src='/images/icon_header.svg' alt='me' width='118' height='48' onClick={() => {setMenuOpen(false)}}/>
          </Link>
          <MenuIcon onClick={() => {setMenuOpen(!menuOpen)}}>
            <Image src='/images/dot.svg' alt='bu' width='32' height='32' />
          </MenuIcon>
        </IconContainer>
        <MenuContainer menuOpen={menuOpen}>
          <Link href='/'>
            <MenuItem onClick={() => {setMenuOpen(false)}}>소개</MenuItem>
          </Link>
          <Link href='/people'>
            <MenuItem onClick={() => {setMenuOpen(false)}}>멤버</MenuItem>
          </Link>
          <Link href='/contact'>
            <MenuItem onClick={() => {setMenuOpen(false)}}>연락처</MenuItem>
          </Link>
        </MenuContainer>
      </HeaderContainer>
      <OverlayBox onClick={()=> {setMenuOpen(false)}}/>
    </>
  )
}

export default Header