'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { usePathname } from 'next/navigation'

import Image from 'next/image'

import c from './AudioGear.module.scss'

const AudioGear = () => {
	const isTablet = useMediaQuery('(max-width: 992px)')

	const pathname = usePathname()

	return (
		<>
			{pathname !== '/checkout' ? (
				<div className={c['audio-gear']}>
					<div className={c['audio-gear-left']}>
						<h2>
							Bringing you the <span>best</span> audio gear
						</h2>

						<p>
							Located at the heart of New York City, Audiophile is the premier store for
							high end headphones, earphones, speakers, and audio accessories. We have a
							large showroom and luxury demonstration rooms available for you to browse
							and experience a wide range of our products. Stop by our store to meet some
							of the fantastic people who make Audiophile the best place to buy your
							portable audio equipment.
						</p>
					</div>

					<div className={c['audio-gear-right']}>
						<Image
							src={`/images/model-img${isTablet ? '-mobile' : ''}.png`}
							width={540}
							height={588}
							alt='picture our model rocking our pair of headphones'
						/>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	)
}

export default AudioGear
