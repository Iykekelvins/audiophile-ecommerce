import Hero from './Hero'
import PreviewProducts from '@/components/PreviewProducts'
import HomePreview from './HomePreview'

import c from './Home.module.scss'

const Home = () => {
	return (
		<div className={c.home}>
			<Hero />
			<PreviewProducts />
			<HomePreview />
		</div>
	)
}

export default Home
