'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/utils/mock'
import { animateCart } from '@/utils/animations'
import { useRouter } from 'next/navigation'
import { useGSAP } from '@gsap/react'

import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import cn from '@/utils/cn'

import c from './Navbar.module.scss'

const Navbar = () => {
	const pathname = usePathname()
	const router = useRouter()

	const menuref = useRef(null)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const tl = useRef<any>(null)

	useGSAP(() => {
		gsap.set('.link-holder', {
			y: 75,
		})

		tl.current = gsap
			.timeline({ paused: true })

			.to(menuref.current, {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				ease: 'power4.inOut',
				duration: 1.25,
			})
			.to(
				'.link-holder',
				{
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: 'power4.inOut',
				},
				'-=0.95'
			)
			.to(
				'.line-1',
				{
					display: 'none',
					duration: 0.1,
					ease: 'power4',
				},
				'-=0.5'
			)
			.to(
				'.line-2',
				{
					rotate: '45deg',
					duration: 0.1,
					ease: 'power4',
				},
				'-=0.5'
			)
			.to(
				'.line-3',
				{
					rotate: '-45deg',
					marginTop: '-7px',
					duration: 0.1,
					ease: 'power4',
				},
				'-=0.5'
			)
	})

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

	useEffect(() => {
		if (isMenuOpen) {
			tl.current.play()
		} else {
			tl.current.reverse()
		}
	}, [isMenuOpen])

	return (
		<nav className={cn(c.navbar, pathname !== '/' ? c.black : '')}>
			<div className={c['navbar-inner']}>
				<div className={c['navbar-inner-left']}>
					<button onClick={toggleMenu} className={c.toggle}>
						<span className='line-1'></span>
						<span className='line-2'></span>
						<span className='line-3'></span>
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

			<div className={`${c['navbar-mobile']} mobile-menu`} ref={menuref}>
				<div className={c['navbar-mobile-links']}>
					{navLinks.map((link) => (
						<div className={c['navbar-mobile-links-item']} key={link.name}>
							<div
								className={cn(c['navbar-mobile-links-item-holder'], 'link-holder')}
								onClick={toggleMenu}>
								<Link href={link.href}>{link.name}</Link>
							</div>
						</div>
					))}
				</div>
				<p className={c.copyright}>
					Copyright {new Date().getFullYear()}. All Rights Reserved
				</p>
			</div>
		</nav>
	)
}

export default Navbar
