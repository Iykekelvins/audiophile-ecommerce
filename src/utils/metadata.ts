import { Metadata } from 'next'

const title = 'Audiophile | Immerse Yourself: High-Fidelity Audio for Every Listener'
const description =
	'Unleash the power of sound. At Audiophile, we curate premium audio equipment for music lovers, audiophiles, and anyone seeking an immersive listening experience. Explore headphones, speakers, turntables, and more – all designed to deliver exceptional sound quality. Elevate your audio journey, shop Audiophile today!'
const url = 'https://audiophile-ecommerce-iykekelvins.vercel.app/'

export const metaDataOptions: Metadata = {
	generator: 'Next.js',
	applicationName: 'Audiophile',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'headphones',
		'speakers',
		'sound system',
		'home theater',
		'audiophile equipment',
		'wireless speakers',
		'bluetooth headphones',
		'noise cancelling headphones',
		'portable speakers',
		'turntables',
		'amplifiers',
		'receivers',
		'soundbars',
		'home audio systems',
		'car audio systems',
	],
	authors: [{ name: 'Kelvin Ochubili', url }],
	creator: 'Kelvin Ochubili',
	publisher: 'Kelvin Ochubili',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title,
		description,
		url,
		siteName: 'Audiophile',
		images: [
			{
				url: 'https://nextjs.org/og.png', // Must be an absolute URL
				width: 800,
				height: 600,
			},
			{
				url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
				width: 1800,
				height: 1600,
				alt: 'My custom alt',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	icons: {
		icon: '/favicon-32x32.png',
		shortcut: '/favicon-32x32.png',
		apple: '/favicon-32x32.png',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/favicon-32x32.png',
		},
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@iykekelvins',
		images: ['https://nextjs.org/og.png'], // Must be an absolute URL
	},
}
