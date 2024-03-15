import Top from './Top'
import Center from './Center'
import Bottom from './Bottom'

import c from '../Home.module.scss'

const HomePreview = () => {
	return (
		<section className={c['home-preview']}>
			<Top />
			<Center />
			<Bottom />
		</section>
	)
}

export default HomePreview
