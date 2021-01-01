import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/intro">소개</Link>
    <Link href="/members">멤버</Link>
    <Link href="/">연락처</Link>
  </div>
)

export default Header