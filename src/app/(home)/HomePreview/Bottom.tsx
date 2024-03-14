import Link from 'next/link'
import Buttons from '@/components/Buttons'
import Image from 'next/image'

import c from '../Home.module.scss'

const Bottom = () => {
	return (
		<div className={c['home-preview-bottom']}>
			<div className={c['home-preview-bottom-left']}>
				<Image
					src='/images/yx1-img.png'
					width={540}
					height={320}
					alt='picture of our yx1 earphones'
				/>
			</div>
			<div className={c['home-preview-bottom-right']}>
				<h3>YX1 EARPHONES</h3>
				<Link href='/earphones/yx1'>
					<Buttons type='secondary'>see product</Buttons>
				</Link>
			</div>
		</div>
	)
}

export default Bottom
