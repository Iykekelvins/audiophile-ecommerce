import Link from 'next/link'
import Buttons from '@/components/Buttons'

import c from '../Home.module.scss'

const Center = () => {
	return (
		<div className={c['home-preview-center']}>
			<div className={c['home-preview-center-left']}>
				<h3>ZX7 SPEAKER</h3>
				<Link href='/speakers/zx7'>
					<Buttons type='secondary'>see product</Buttons>
				</Link>
			</div>
		</div>
	)
}

export default Center
