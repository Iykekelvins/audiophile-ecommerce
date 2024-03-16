import Image from 'next/image'
import Buttons from '@/components/Buttons'
import Link from 'next/link'

import c from './Home.module.scss'

const Hero = () => {
	return (
		<section className={c['home-hero']}>
			<div className={c['home-hero-left']}>
				<h4>NEW PRODUCT</h4>

				<h1>XX99 Mark II Headphones</h1>

				<p>
					Experience natural, lifelike audio and exceptional build quality made for the
					passionate music enthusiast.
				</p>

				<Link href='/headphones/xx99-mark-ii-headphones'>
					<Buttons type='primary'>See product</Buttons>
				</Link>
			</div>

			<div className={c['home-hero-right']}>
				<Image
					src='/images/hero-img.png'
					width={700}
					height={700}
					alt='image of a pair of headphones'
				/>
			</div>
		</section>
	)
}

export default Hero
