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
