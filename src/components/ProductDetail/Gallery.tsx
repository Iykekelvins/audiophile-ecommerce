import { IProduct } from '@/utils/types'

import Image from 'next/image'

import c from './ProductDetail.module.scss'

const Gallery = ({ product }: { product: IProduct | any }) => {
	return (
		<div className={c['details-gallery']}>
			<div className={c['details-gallery-left']}>
				<Image
					src={product.gallery.first}
					width={445}
					height={280}
					alt={`gallery image of our ${product.category} product`}
				/>
				<Image
					src={product.gallery.second}
					width={445}
					height={280}
					alt={`gallery image of our ${product.category} product`}
				/>
			</div>
			<div className={c['details-gallery-right']}>
				<Image
					src={product.gallery.third}
					width={635}
					height={592}
					alt={`gallery image of our ${product.category} product`}
				/>
			</div>
		</div>
	)
}

export default Gallery
