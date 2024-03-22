import { Metadata } from 'next'

import Headphones from '@/_pages/headphones'

export const metadata: Metadata = {
	title: 'Headphones',
}

const HeadphonesPage = () => {
	return <Headphones />
}

export default HeadphonesPage
