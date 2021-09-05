import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
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
  width: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 20px 10px 0;
    flex-direction: column;
    position: fixed;
    height: 60px;
    width: 100%;
    box-shadow: 0 5px 5px ${Colors.backDark};
  }
`
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 80;
      height: 32px;
    }
  }
`

const MenuIcon = styled.div`
  display: none;
  width: 48px;
  @media (max-width: 768px) {
    display: flex;
    width: 24px;
    height: 24px;
  }
`

const MenuContainer = styled.div<{ menuOpen: boolean }>`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
    background: ${Colors.backLight};
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    padding: 15px 0;
    box-shadow: 0 5px 5px ${Colors.backDark};
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
    font-size: 20px;
  }
`

const OverlayBox = styled.div<{ menuOpen: boolean }>`
  display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <HeaderContainer>
        <IconContainer>
          <Link href="/">
            <Image
              src="/images/icon_header.svg"
              alt="me"
              width="118"
              height="48"
              onClick={() => {
                setMenuOpen(false)
              }}
            />
          </Link>
          <MenuIcon
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <Image src="/images/Union.svg" alt="me" width="118" height="48" />
          </MenuIcon>
        </IconContainer>
        <MenuContainer menuOpen={menuOpen}>
          <Link href="/">
            <MenuItem
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              소개
            </MenuItem>
          </Link>
          <Link href="/people">
            <MenuItem
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              멤버
            </MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              연락처
            </MenuItem>
          </Link>
          {/* <Link href="/recruit">
            <MenuItem
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              지원
            </MenuItem>
          </Link> */}
        </MenuContainer>
      </HeaderContainer>
      <OverlayBox
        onClick={() => {
          setMenuOpen(false)
        }}
        menuOpen={menuOpen}
      />
    </>
  )
}

export default Header
