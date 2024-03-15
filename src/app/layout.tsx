import '../scss/index.scss'

import type { Metadata } from 'next'
import { metaDataOptions } from '@/utils/metadata'

import Lenis from '@/components/Lenis'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PreviewProducts from '@/components/PreviewProducts'
import AudioGear from '@/components/AudioGear'

export const metadata: Metadata = {
	title: {
		default: 'Audiophile | Immerse Yourself: High-Fidelity Audio for Every Listener',
		template: '%s | Audiophile',
	},
	description:
		'Unleash the power of sound. At Audiophile, we curate premium audio equipment for music lovers, audiophiles, and anyone seeking an immersive listening experience. Explore headphones, speakers, turntables, and more – all designed to deliver exceptional sound quality. Elevate your audio journey, shop Audiophile today!',
	...metaDataOptions,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Lenis>
				<body>
					<main>
						<Navbar />
						{children}
						<PreviewProducts isHome />
						<AudioGear />
						<Footer />
					</main>
				</body>
			</Lenis>
		</html>
	)
}
