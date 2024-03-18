'use client'

import { useEffect } from 'react'

import BillingDetails from './BillingDetails'
import ShippingInfo from './ShippingInfo'

import c from './checkout.module.scss'

const Checkout = () => {
	useEffect(() => {
		const body = document.querySelector('body')

		body?.classList.add('checkout-bg')
	}, [])

	return (
		<div className={c.checkout}>
			<header className={c['checkout-header']}>
				<button>Go back</button>
			</header>

			<div className={c['checkout-grid']}>
				<div className={c['checkout-grid-left']}>
					<h2>CHECKOUT</h2>

					<BillingDetails />
					<ShippingInfo />
				</div>
			</div>
		</div>
	)
}

export default Checkout
