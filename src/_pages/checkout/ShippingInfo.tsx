'use client'

import { useState } from 'react'

import Inputs from '@/components/Inputs'

import c from './checkout.module.scss'

const ShippingInfo = () => {
	const [payload, setPayload] = useState({
		address: '',
		zip_code: '',
		city: '',
		country: '',
	})

	const handlePayload = (e: any) => {
		const name = e.target.name
		const value = e.target.value

		setPayload({
			...payload,
			[name]: value,
		})
	}

	return (
		<div className={c['checkout-grid-left-shipping']}>
			<h4 className={c.title}>shipping info</h4>

			<Inputs
				name='address'
				placeholder='1137 Williams Avenue'
				type='text'
				label='Address'
				className={c.address}
				onChange={handlePayload}
				value={payload.address}
			/>

			<div className={c['checkout-grid-left-grid']}>
				<Inputs
					name='email'
					placeholder='10001'
					type='number'
					label='ZIP Code'
					onChange={handlePayload}
					value={payload.zip_code}
				/>

				<Inputs
					name='city'
					placeholder='New York'
					type='text'
					label='City'
					onChange={handlePayload}
					value={payload.city}
				/>

				<Inputs
					name='country'
					placeholder='United States'
					type='text'
					label='Country'
					onChange={handlePayload}
					value={payload.country}
				/>
			</div>
		</div>
	)
}

export default ShippingInfo
