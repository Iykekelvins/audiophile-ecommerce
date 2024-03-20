import { useCartStore } from '@/store'
import { CartItem } from '@/components/Cart'

import Buttons from '@/components/Buttons'
import cn from '@/utils/cn'

import c from './checkout.module.scss'

const Summary = () => {
	const cartItems = useCartStore((state) => state.cartItems)

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
				<h4>$5,396</h4>
			</div>
			<div className={c['checkout-summary-info']}>
				<p>SHIPPING</p>
				<h4>$50</h4>
			</div>
			<div className={c['checkout-summary-info']}>
				<p>VAT (INCLUDED)</p>
				<h4>$1,079</h4>
			</div>

			<div className={cn(c['checkout-summary-info'], c.total)}>
				<p>GRAND TOTAL</p>
				<h4>$5,446</h4>
			</div>

			<Buttons type='primary'>CONTINUE & PAY</Buttons>
		</div>
	)
}

export default Summary