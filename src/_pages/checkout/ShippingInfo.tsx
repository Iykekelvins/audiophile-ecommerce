'use client'

import { useMiscStore } from '@/store/misc'

import Inputs from '@/components/Inputs'

import c from './checkout.module.scss'

const ShippingInfo = () => {
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
				errorTwo={payload.address === '' && checkOutErrors}
			/>

			<div className={c['checkout-grid-left-grid']}>
				<Inputs
					name='zip_code'
					placeholder='10001'
					type='number'
					label='ZIP Code'
					onChange={handlePayload}
					value={payload.zip_code}
					errorTwo={payload.zip_code === '' && checkOutErrors}
				/>

				<Inputs
					name='city'
					placeholder='New York'
					type='text'
					label='City'
					onChange={handlePayload}
					value={payload.city}
					errorTwo={payload.city === '' && checkOutErrors}
				/>

				<Inputs
					name='country'
					placeholder='United States'
					type='text'
					label='Country'
					onChange={handlePayload}
					value={payload.country}
					errorTwo={payload.country === '' && checkOutErrors}
				/>
			</div>
		</div>
	)
}

export default ShippingInfo
