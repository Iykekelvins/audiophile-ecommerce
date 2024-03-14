import Link from 'next/link'
import Buttons from '@/components/Buttons'

import c from '../Home.module.scss'
import Image from 'next/image'

const Center = () => {
	return (
		<div className={c['home-preview-center']}>
			<div className={c['home-preview-center-left']}>
				<h3>ZX7 SPEAKER</h3>
				<Link href='/speakers/zx7'>
					<Buttons type='secondary'>see product</Buttons>
				</Link>
			</div>

			<Image src='/images/zx7-img.png' height={320} width={1100} alt='' />
		</div>
	)
}

export default Center
