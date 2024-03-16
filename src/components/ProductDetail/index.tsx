'use client'

import { useRouter } from 'next/navigation'
import { products } from '@/utils/data'
import { PageItem } from '../PageItems'
import { IProduct } from '@/utils/types'

import c from './ProductDetail.module.scss'

const ProductDetail = ({ slug }: { slug: string }) => {
	const router = useRouter()

	const product = products.find((item: IProduct) => item.slug === slug)

	return (
		<div className={c.details}>
			<header className={c['details-header']}>
				<button onClick={() => router.back()}>Go Back</button>
			</header>

			<PageItem product={product} qty />
		</div>
	)
}

export default ProductDetail
