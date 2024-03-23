import { useEffect, useState } from 'react'
import { useCartStore } from '@/store'
import { useMiscStore } from '@/store/misc'
import { CartItem } from '@/components/Cart'
import { emailRegex, formatNum } from '@/utils'
import { useRouter } from 'next/navigation'
import { animateModal } from '@/utils/animations'

import Buttons from '@/components/Buttons'
import cn from '@/utils/cn'

import c from './checkout.module.scss'

const Summary = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	const cartItems = useCartStore((state) => state.cartItems)
	const setTotal = useCartStore((state) => state.setTotal)
	const payload = useMiscStore((state) => state.payload)
	const setCheckoutErrors = useMiscStore((state) => state.setCheckoutErrors)
	const selectedPayment = useMiscStore((state) => state.selectedPayment)

	const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

	const vat = (20 / 100) * total

	const shipping = 50

	const grandTotal = total + vat + shipping

	const errors =
		payload.name === '' ||
		payload.email === '' ||
		payload.phone_number === '' ||
		payload.address === '' ||
		payload.zip_code === '' ||
		payload.city === '' ||
		payload.country === '' ||
		!emailRegex.test(payload.email) ||
		(selectedPayment === 'e-Money' && payload.eMoney === '') ||
		(selectedPayment === 'e-Money' && payload.eMoneyPin === '')

	const handleCheckout = () => {
		setLoading(true)

		if (errors) {
			setCheckoutErrors(true)
			setLoading(false)

			return
		}

		setTimeout(() => {
			animateModal()
			setLoading(false)
		}, 1000)
	}

	useEffect(() => {
		if (cartItems.length === 0) {
			setTimeout(() => {
				router.replace('/')
			}, 500)
		}
	}, [cartItems, router])

	useEffect(() => {
		setTotal(grandTotal)
	}, [setTotal, grandTotal])

	return (
		<div className={c['checkout-summary']}>
			<h3>Summary</h3>

			<ul>
				{cartItems.map((item) => (
					<CartItem key={item.id} product={item} isSummaryPdt />
				))}
			</ul>

			<div className={c['checkout-summary-info']}>
				<p>TOTAL</p>
				<h4>$ {formatNum(total)}</h4>
			</div>
			<div className={c['checkout-summary-info']}>
				<p>SHIPPING</p>
				<h4>$ {shipping}</h4>
			</div>
			<div className={c['checkout-summary-info']}>
				<p>VAT (INCLUDED)</p>
				<h4>$ {formatNum(vat)}</h4>
			</div>

			<div className={cn(c['checkout-summary-info'], c.total)}>
				<p>GRAND TOTAL</p>
				<h4>$ {formatNum(grandTotal)}</h4>
			</div>

			<Buttons type='primary' onClick={() => handleCheckout()}>
				{!loading ? 'CONTINUE & PAY' : <div className='spinner'></div>}
			</Buttons>
		</div>
	)
}

export default Summary
