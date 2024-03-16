import { products } from '@/utils/data'
import { IProduct } from '@/utils/types'

import Image from 'next/image'
import Buttons from '../Buttons'
import Link from 'next/link'

import c from './PageItems.module.scss'

const PageItem = ({ product }: { product: IProduct }) => {
	return (
		<li className={c['products-item']}>
			<div className={c['products-item-img']}>
				<Image
					src={product.img}
					width={350}
					height={385}
					alt={`photo of our ${product.name}`}
					className={c[`${product.category}`]}
				/>

				<svg
					width='253'
					height='123'
					viewBox='0 0 253 123'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.152113' filter='url(#filter0_f_0_4469)'>
						<ellipse cx='126.5' cy='61.5' rx='82.5' ry='17.5' fill='black' />
					</g>
					<defs>
						<filter
							id='filter0_f_0_4469'
							x='0.507492'
							y='0.507492'
							width='251.985'
							height='121.985'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='21.7463'
								result='effect1_foregroundBlur_0_4469'
							/>
						</filter>
					</defs>
				</svg>
			</div>

			<div className={c['products-item-info']}>
				{product.new && <h4>NEW PRODUCT</h4>}

				<h2>{product.name}</h2>

				<p>{product.info}</p>

				<Link href={`/${product.category}/${product.slug}`}>
					<Buttons type='primary'>see product</Buttons>
				</Link>
			</div>
		</li>
	)
}

const PageItems = ({ category }: { category: string }) => {
	const categories = products.filter((product) => product.category === category)

	return (
		<ul className={c.products}>
			{categories.map((category) => (
				<PageItem key={category.id} product={category} />
			))}
		</ul>
	)
}

export default PageItems
