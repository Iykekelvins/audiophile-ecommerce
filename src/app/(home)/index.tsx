import Hero from './Hero'
import PreviewProducts from '@/components/PreviewProducts'

import c from './Home.module.scss'

const Home = () => {
	return (
		<div className={c.home}>
			<Hero />
			<PreviewProducts />
		</div>
	)
}

export default Home
