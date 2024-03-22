import ProductDetail from '@/components/ProductDetail'

import { Metadata } from 'next'

type ProductProps = {
	params: {
		slug: string
	}
}

export const generateMetadata = ({ params }: ProductProps): Metadata => {
	return {
		title: ` ${params.slug.replace(/-/g, ' ').toLocaleUpperCase()}`,
	}
}

const SingleEarphonesPage = ({
	params,
}: {
	params: {
		slug: string
	}
}) => {
	const slug = params.slug

	return <ProductDetail slug={slug} />
}

export default SingleEarphonesPage
