import { IProduct } from '@/utils/types'

import c from './ProductDetail.module.scss'

const Features = ({ product }: { product: IProduct | any }) => {
	return (
		<div className={c['details-features']}>
			<div className={c['details-features-grid']}>
				<div className={c['details-features-grid-left']}>
					<h2>FEATURES</h2>

					<p>{product.features.first}</p>
					<p>{product.features.second}</p>
				</div>

				<div className={c['details-features-grid-right']}>
					<h2>in the box</h2>

					<ul>
						{product.items.map((item: any) => (
							<li key={item.extraItem}>
								{item.quantity}x<span>{item.extraItem}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Features
