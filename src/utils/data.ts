import { IProduct } from './types'

export const products: IProduct[] = [
	{
		id: 1,
		slug: 'xx99-mark-ii-headphones',
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
				href: '/headphones/xx99-mark-i',
			},
			{
				name: 'XX59',
				img: '/images/headphones/xx59.png',
				href: '/headphones/xx59',
			},
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9',
			},
		],
	},
	{
		id: 2,
		slug: 'xx99-mark-i-headphones',
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
				href: '/headphones/xx99-mark-ii',
			},
			{
				name: 'XX59',
				img: '/images/headphones/xx59.png',
				href: '/headphones/xx59',
			},
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9',
			},
		],
	},
	{
		id: 3,
		slug: 'xx59-headphones',
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
				href: '/headphones/xx99-mark-ii',
			},
			{
				name: 'XX99 MARK I',
				img: '/images/headphones/xx99-mark-i.png',
				href: '/headphones/xx99-mark-i',
			},
			{
				name: 'ZX9 SPEAKER',
				img: '/images/speakers/zx9.png',
				href: '/speakers/zx9',
			},
		],
	},
]
