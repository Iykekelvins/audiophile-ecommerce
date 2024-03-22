import { Metadata } from 'next'

import Checkout from '@/_pages/checkout'

export const metadata: Metadata = {
	title: 'Checkout',
}

const CheckoutPage = () => {
	return <Checkout />
}

export default CheckoutPage
