import '../scss/index.scss'

import type { Metadata } from 'next'
import { metaDataOptions } from '@/utils/metadata'

import { Manrope } from 'next/font/google'

import Lenis from '@/components/Lenis'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PreviewProducts from '@/components/PreviewProducts'
import AudioGear from '@/components/AudioGear'
import Cart from '@/components/Cart'
import CheckoutModal from '@/_pages/checkout/CheckoutModal'

export const metadata: Metadata = {
	title: {
		default: 'Audiophile | Immerse Yourself: High-Fidelity Audio for Every Listener',
		template: '%s | Audiophile',
	},
	description:
		'Unleash the power of sound. At Audiophile, we curate premium audio equipment for music lovers, audiophiles, and anyone seeking an immersive listening experience. Explore headphones, speakers, turntables, and more – all designed to deliver exceptional sound quality. Elevate your audio journey, shop Audiophile today!',
	...metaDataOptions,
}

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Lenis>
				<body>
					<main className={manrope.className}>
						<>
							<Navbar />
							<Cart />
							<CheckoutModal />
							{children}
							<PreviewProducts hide />
							<AudioGear />
						</>
						<Footer />
					</main>
				</body>
			</Lenis>
		</html>
	)
}
