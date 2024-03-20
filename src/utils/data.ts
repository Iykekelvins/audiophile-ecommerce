import { IProduct } from './types'

export const products: IProduct[] = [
	{
		id: 1,
		slug: 'xx99-mark-ii-headphones',
		short_name: 'XX99 MK II',
		category: 'headphones',
		name: 'XX99 Mark II Headphones',
		info: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
		new: true,
		price: 2999,
		quantity: 1,
		img: '/images/headphones/xx99-mark-ii.png',
		features: {
			first:
				'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
			second:
				'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
		},
		items: [
			{
				quantity: 1,
				extraItem: 'Headphone Unit',
			},
			{
				quantity: 2,
				extraItem: 'Replacement Earcups',
			},
			{
				quantity: 1,
				extraItem: 'User Manual',
			},
			{
				quantity: 1,
				extraItem: '3.5mm 5m Audio Cable',
			},
			{
				quantity: 1,
				extraItem: 'Travel Bag',
			},
		],
		gallery: {
			first: '/images/headphones/xx99-mark-ii-gallery-1.png',
			second: '/images/headphones/xx99-mark-ii-gallery-2.png',
			third: '/images/headphones/xx99-mark-ii-gallery-3.png',
		},
		others: [
			{
				name: 'XX99 MARK I',
				img: '/images/headphones/xx99-mark-i.png',
				href: '/headphones/xx99-mark-i-headphones',
			},
			{
				name: 'XX59',
				img: '/images/headphones/xx59.png',
				href: '/headphones/xx59-headphones',
			},
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9-speaker',
			},
		],
	},
	{
		id: 2,
		slug: 'xx99-mark-i-headphones',
		short_name: 'XX99 MK I',
		category: 'headphones',
		name: 'XX99 Mark I Headphones',
		info: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
		new: false,
		price: 1750,
		quantity: 1,
		img: '/images/headphones/xx99-mark-i.png',
		features: {
			first:
				'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
			second:
				'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
		},
		items: [
			{
				quantity: 1,
				extraItem: 'Headphone Unit',
			},
			{
				quantity: 2,
				extraItem: 'Replacement Earcups',
			},
			{
				quantity: 1,
				extraItem: 'User Manual',
			},
			{
				quantity: 1,
				extraItem: '3.5mm 5m Audio Cable',
			},
		],
		gallery: {
			first: '/images/headphones/xx99-mark-i-gallery-1.png',
			second: '/images/headphones/xx99-mark-i-gallery-2.png',
			third: '/images/headphones/xx99-mark-i-gallery-3.png',
		},
		others: [
			{
				name: 'XX99 MARK II',
				img: '/images/headphones/xx99-mark-ii.png',
				href: '/headphones/xx99-mark-ii-headphones',
			},
			{
				name: 'XX59',
				img: '/images/headphones/xx59.png',
				href: '/headphones/xx59-headphones',
			},
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9-speaker',
			},
		],
	},
	{
		id: 3,
		slug: 'xx59-headphones',
		short_name: 'XX59',
		category: 'headphones',
		name: 'XX59 Headphones',
		info: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
		new: false,
		price: 899,
		quantity: 1,
		img: '/images/headphones/xx59.png',
		features: {
			first:
				'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
			second:
				'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
		},
		items: [
			{
				quantity: 1,
				extraItem: 'Headphone Unit',
			},
			{
				quantity: 2,
				extraItem: 'Replacement Earcups',
			},
			{
				quantity: 1,
				extraItem: 'User Manual',
			},
			{
				quantity: 1,
				extraItem: '3.5mm 5m Audio Cable',
			},
		],
		gallery: {
			first: '/images/headphones/xx59-gallery-1.png',
			second: '/images/headphones/xx59-gallery-2.png',
			third: '/images/headphones/xx59-gallery-3.png',
		},
		others: [
			{
				name: 'XX99 MARK II',
				img: '/images/headphones/xx99-mark-ii.png',
				href: '/headphones/xx99-mark-ii-headphones',
			},
			{
				name: 'XX99 MARK I',
				img: '/images/headphones/xx99-mark-i.png',
				href: '/headphones/xx99-mark-i-headphones',
			},
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9-speaker',
			},
		],
	},
	{
		id: 4,
		slug: 'zx9-speaker',
		short_name: 'ZX9',
		category: 'speakers',
		name: 'ZX9 SPEAKER',
		info: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
		new: true,
		price: 4500,
		quantity: 1,
		img: '/images/speakers/zx9.png',
		features: {
			first:
				'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
			second:
				'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
		},
		items: [
			{
				quantity: 2,
				extraItem: 'Speaker Unit',
			},
			{
				quantity: 2,
				extraItem: 'Speaker Cloth Panel',
			},
			{
				quantity: 1,
				extraItem: 'User Manual',
			},
			{
				quantity: 1,
				extraItem: '3.5mm 5m Audio Cable',
			},
			{
				quantity: 1,
				extraItem: '10m Optical Cable',
			},
		],
		gallery: {
			first: '/images/speakers/zx9-gallery-1.png',
			second: '/images/speakers/zx9-gallery-2.png',
			third: '/images/speakers/zx9-gallery-3.png',
		},
		others: [
			{
				name: 'ZX7 SPEAKER',
				img: '/images/speakers/zx7.png',
				href: '/speakers/zx7-speaker',
			},
			{
				name: 'XX99 MARK I',
				img: '/images/headphones/xx99-mark-i.png',
				href: '/headphones/xx99-mark-i-headphones',
			},
			{
				name: 'XX59',
				img: '/images/headphones/xx59.png',
				href: '/headphones/xx59-headphones',
			},
		],
	},
	{
		id: 5,
		slug: 'zx7-speaker',
		short_name: 'ZX7',
		category: 'speakers',
		name: 'ZX7 SPEAKER',
		info: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
		new: false,
		price: 3500,
		quantity: 1,
		img: '/images/speakers/zx7.png',
		features: {
			first:
				'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
			second:
				'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
		},
		items: [
			{
				quantity: 2,
				extraItem: 'Speaker Unit',
			},
			{
				quantity: 2,
				extraItem: 'Speaker Cloth Panel',
			},
			{
				quantity: 1,
				extraItem: 'User Manual',
			},
			{
				quantity: 1,
				extraItem: '3.5mm 5m Audio Cable',
			},
			{
				quantity: 1,
				extraItem: '17.5m Optical Cable',
			},
		],
		gallery: {
			first: '/images/speakers/zx7-gallery-1.png',
			second: '/images/speakers/zx7-gallery-2.png',
			third: '/images/speakers/zx7-gallery-3.png',
		},
		others: [
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9-speaker',
			},
			{
				name: 'XX99 MARK I',
				img: '/images/headphones/xx99-mark-i.png',
				href: '/headphones/xx99-mark-i-headphones',
			},
			{
				name: 'XX59',
				img: '/images/headphones/xx59.png',
				href: '/headphones/xx59-headphones',
			},
		],
	},
	{
		id: 6,
		slug: 'yx1-earphones',
		short_name: 'YX1',
		category: 'earphones',
		name: 'YX1 WIRELESS EARPHONES',
		info: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
		new: true,
		price: 599,
		quantity: 1,
		img: '/images/earphones/yx1.png',
		features: {
			first:
				'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
			second:
				'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
		},
		items: [
			{
				quantity: 2,
				extraItem: 'Earphone Unit',
			},
			{
				quantity: 6,
				extraItem: 'Multi-size Earplugs',
			},
			{
				quantity: 1,
				extraItem: 'User Manual',
			},
			{
				quantity: 1,
				extraItem: 'USB-C Charging Cable',
			},
			{
				quantity: 1,
				extraItem: 'Travel Pouch',
			},
		],
		gallery: {
			first: '/images/earphones/yx1-gallery-1.png',
			second: '/images/earphones/yx1-gallery-2.png',
			third: '/images/earphones/yx1-gallery-3.png',
		},
		others: [
			{
				name: 'XX99 MARK I ',
				img: '/images/headphones/xx99-mark-i.png',
				href: '/headphones/xx99-mark-i-headphones',
			},
			{
				name: 'XX59',
				img: '/images/headphones/xx59.png',
				href: '/headphones/xx59-headphones',
			},
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9-speaker',
			},
		],
	},
]
