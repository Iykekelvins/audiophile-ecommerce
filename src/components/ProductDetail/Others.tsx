import { IProduct } from '@/utils/types'

import Image from 'next/image'
import Buttons from '../Buttons'
import Link from 'next/link'

import c from './ProductDetail.module.scss'

const Others = ({ product }: { product: IProduct }) => {
	return (
		<div className={c['details-others']}>
			<h2>you may also like</h2>

			<ul>
				{product.others.map((item) => (
					<li key={item.name} className={c['details-others-item']}>
						<div className={c['details-others-item-img']}>
							<Image
								src={item.img}
								width={175}
								height={190}
								alt={`image of our ${item.name} product`}
							/>
						</div>

						<h3>{item.name}</h3>

						<Link href={item.href}>
							<Buttons type='primary'>See Product</Buttons>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Others
