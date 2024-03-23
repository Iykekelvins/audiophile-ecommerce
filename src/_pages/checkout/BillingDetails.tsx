'use client'

import { useMiscStore } from '@/store/misc'
import { emailRegex } from '@/utils'

import Inputs from '@/components/Inputs'

import c from './checkout.module.scss'

const BillingDetails = () => {
	const payload = useMiscStore((state) => state.payload)
	const setPayload = useMiscStore((state) => state.setPayload)
	const checkOutErrors = useMiscStore((state) => state.checkOutErrors)

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

			<div className={c['checkout-grid-left-grid']}>
				<Inputs
					name='name'
					placeholder='Alexei Ward'
					type='text'
					label='Name'
					onChange={handlePayload}
					value={payload.name}
					errorTwo={payload.name === '' && checkOutErrors}
				/>

				<Inputs
					name='email'
					placeholder='alexei@mail.com'
					type='email'
					label='Email'
					onChange={handlePayload}
					value={payload.email}
					error={payload.email !== '' && !emailRegex.test(payload.email)}
					errorTwo={payload.email === '' && checkOutErrors}
				/>

				<Inputs
					name='phone_number'
					placeholder='+1 202-555-0136'
					type='text'
					label='Phone Number'
					onChange={handlePayload}
					value={payload.phone_number}
					errorTwo={payload.phone_number === '' && checkOutErrors}
				/>
			</div>
		</div>
	)
}

export default BillingDetails
