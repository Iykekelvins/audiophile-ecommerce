import Image from 'next/image'
import Buttons from '@/components/Buttons'
import Link from 'next/link'

import c from '../Home.module.scss'

const Top = () => {
	return (
		<div className={c['home-preview-top']}>
			<div className={c['home-preview-top-left']}>
				<Image
					src='/images/speakers/zx9.png'
					width={400}
					height={493}
					alt='picture of our zx9 speaker'
				/>
			</div>

			<div className={c['home-preview-top-right']}>
				<h2>
					ZX9 <br /> SPEAKER
				</h2>

				<p>
					Upgrade to premium speakers that are phenomenally built to deliver truly
					remarkable sound.
				</p>

				<Link href='/speakers/zx9-speaker'>
					<Buttons type='tertiary'>see product</Buttons>
				</Link>
			</div>
		</div>
	)
}

export default Top
