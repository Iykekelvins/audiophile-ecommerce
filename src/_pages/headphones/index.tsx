import Header from '@/components/Header'
import PageItems from '@/components/PageItems'

import c from './headphones.module.scss'

const Headphones = () => {
	return (
		<div className={c.headphones}>
			<Header title='headphones' />
			<PageItems category='headphones' />
		</div>
	)
}

export default Headphones
