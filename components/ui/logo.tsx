import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className='relative' width={96} height={96} src={logo} alt='logo' />
    </Link>
  )
}

