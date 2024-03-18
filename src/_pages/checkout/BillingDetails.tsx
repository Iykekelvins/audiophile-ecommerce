'use client'

import { useState } from 'react'

import Inputs from '@/components/Inputs'

import c from './checkout.module.scss'

const BillingDetails = () => {
	const [payload, setPayload] = useState({
		name: '',
		email: '',
		phone_number: '',
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
		<div className={c['checkout-grid-left-billing']}>
			<h4 className={c.title}>Billing Details</h4>

			<div className={c['checkout-grid-left-billing-grid']}>
				<Inputs
					name='name'
					placeholder='Alexei Ward'
					type='text'
					label='Name'
					onChange={handlePayload}
					value={payload.name}
				/>

				<Inputs
					name='email'
					placeholder='alexei@mail.com'
					type='text'
					label='Email'
					onChange={handlePayload}
					value={payload.email}
				/>

				<Inputs
					name='phone_number'
					placeholder='+1 202-555-0136'
					type='text'
					label='Phone Number'
					onChange={handlePayload}
					value={payload.phone_number}
				/>
			</div>
		</div>
	)
}

export default BillingDetails
