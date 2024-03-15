import { navLinks } from '@/utils/mock'

import Link from 'next/link'
import Image from 'next/image'

import c from './Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={c.navbar}>
			<div className={c['navbar-inner']}>
				<div className={c['navbar-inner-left']}>
					<button>
						<svg
							width='16'
							height='15'
							viewBox='0 0 16 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect width='16' height='3' fill='white' />
							<rect y='6' width='16' height='3' fill='white' />
							<rect y='12' width='16' height='3' fill='white' />
						</svg>
					</button>

					<Link href='/'>
						<Image src='/icons/logo.svg' alt='audiophile logo' width={143} height={25} />
					</Link>
				</div>

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
