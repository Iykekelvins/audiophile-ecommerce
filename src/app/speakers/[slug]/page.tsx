import ProductDetail from '@/components/ProductDetail'

const SingleSpeakersPage = ({
	params,
}: {
	params: {
		slug: string
	}
}) => {
	const slug = params.slug

	return <ProductDetail slug={slug} />
}

export default SingleSpeakersPage
