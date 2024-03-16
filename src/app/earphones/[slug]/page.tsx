import ProductDetail from '@/components/ProductDetail'

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
