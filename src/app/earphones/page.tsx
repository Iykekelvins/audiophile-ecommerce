import { Metadata } from 'next'

import Earphones from '@/_pages/earphones'

export const metadata: Metadata = {
	title: 'Earphones',
}

const EarphonesPage = () => {
	return <Earphones />
}

export default EarphonesPage
