import { navLinks } from '@/utils/mock'

import Link from 'next/link'
import Image from 'next/image'

import c from './Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={c.navbar}>
			<div className={c['navbar-inner']}>
				<Link href='/'>
					<Image src='/icons/logo.svg' alt='audiophile logo' width={143} height={25} />
				</Link>

				<ul>
					{navLinks.map((link) => (
						<li key={link.name}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>

				<button>
					<Image src='/icons/cart.svg' height={20} width={23} alt='cart icon' />
				</button>
			</div>
		</nav>
	)
}

export default Navbar
