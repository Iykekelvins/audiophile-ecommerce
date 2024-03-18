'use client'

import { usePathname } from 'next/navigation'
import { navLinks } from '@/utils/mock'
import { animateCart } from '@/utils/animations'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'
import cn from '@/utils/cn'

import c from './Navbar.module.scss'

const Navbar = () => {
	const pathname = usePathname()

	const router = useRouter()

	const handleCloseCart = (href: string) => {
		const cart: HTMLDivElement | null = document.querySelector('.cart')

		if (!cart?.style.opacity || cart?.style.opacity === '0') {
			router.push(href)
		} else {
			animateCart()

			setTimeout(() => {
				router.push(href)
			}, 500)
		}
	}

	return (
		<nav className={cn(c.navbar, pathname !== '/' ? c.black : '')}>
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

					<Link href='/' onClick={() => handleCloseCart('/')}>
						<Image src='/icons/logo.svg' alt='audiophile logo' width={143} height={25} />
					</Link>
				</div>

				<ul>
					{navLinks.map((link) => (
						<li key={link.name} onClick={() => handleCloseCart(link.href)}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>

				<button onClick={() => animateCart()}>
					<Image src='/icons/cart.svg' height={20} width={23} alt='cart icon' />
				</button>
			</div>
		</nav>
	)
}

export default Navbar
