import { useCartStore } from '@/store'
import { CartItem } from '@/components/Cart'
import { formatNum } from '@/utils'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { animateCart } from '@/utils/animations'

import Buttons from '@/components/Buttons'
import cn from '@/utils/cn'

import c from './checkout.module.scss'

const Summary = () => {
	const router = useRouter()
	const cartItems = useCartStore((state) => state.cartItems)
	const setTotal = useCartStore((state) => state.setTotal)

	const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

	const vat = (20 / 100) * total

	const shipping = 50

	const grandTotal = total + vat + shipping

	useEffect(() => {
		if (cartItems.length === 0) {
			animateCart()
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

			<Buttons type='primary' onClick={() => animateCart('checkout')}>
				CONTINUE & PAY
			</Buttons>
		</div>
	)
}

export default Summary
