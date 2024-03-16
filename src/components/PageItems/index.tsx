import { products } from '@/utils/data'
import { IProduct } from '@/utils/types'
import { formatNum } from '@/utils'

import Image from 'next/image'
import Buttons from '../Buttons'
import Link from 'next/link'
import cn from '@/utils/cn'

import c from './PageItems.module.scss'

export const PageItem = ({
	product,
	qty,
}: {
	product: IProduct | any
	qty?: boolean
}) => {
	return (
		<li className={cn(c['products-item'], qty ? c.qty : '')}>
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

				{!qty ? (
					<Link href={`/${product.category}/${product.slug}`}>
						<Buttons type='primary'>see product</Buttons>
					</Link>
				) : (
					<div className={c['products-item-info-price']}>
						<h4>$ {formatNum(product.price)}</h4>

						<footer>
							<div>
								<button className={c.minus}>
									<svg
										width='5'
										height='2'
										viewBox='0 0 5 2'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											opacity='0.25'
											d='M0.550508 1.516V0.2875H4.45051V1.516H0.550508Z'
											fill='black'
										/>
									</svg>
								</button>
								<span>1</span>
								<button className={c.plus}>
									<svg
										width='7'
										height='7'
										viewBox='0 0 7 7'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											opacity='0.25'
											d='M2.89362 6.258V3.931H0.566621V2.7025H2.89362V0.382H4.12212V2.7025H6.43612V3.931H4.12212V6.258H2.89362Z'
											fill='black'
										/>
									</svg>
								</button>
							</div>

							<Buttons type='primary'>ADD TO CART</Buttons>
						</footer>
					</div>
				)}
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
