import ProductDetail from '@/components/ProductDetail'

const SingleHeadphonesPage = ({
	params,
}: {
	params: {
		slug: string
	}
}) => {
	const slug = params.slug

	return <ProductDetail slug={slug} />
}

export default SingleHeadphonesPage
