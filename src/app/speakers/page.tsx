import { Metadata } from 'next'

import Speakers from '@/_pages/speakers'

export const metadata: Metadata = {
	title: 'Speakers',
}

const SpeakersPage = () => {
	return <Speakers />
}

export default SpeakersPage
