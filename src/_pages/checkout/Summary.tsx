import { CartItem } from '@/components/Cart'

import c from './checkout.module.scss'
import Buttons from '@/components/Buttons'

const Summary = () => {
	return (
		<div className={c['checkout-summary']}>
			<h3>Summary</h3>

			<ul>
				<CartItem
					img='/images/headphones/xx59.png'
					name='xx59'
					price={2999}
					quantity={1}
					isSummaryPdt
				/>

				<CartItem
					img='/images/headphones/xx99-mark-i.png'
					name='xx59'
					price={2999}
					quantity={2}
					isSummaryPdt
				/>
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

			<div className={c['checkout-summary-info']}>
				<p>GRAND TOTAL</p>
				<h4 className={c.total}>$5,446</h4>
			</div>

			<Buttons type='primary'>CONTINUE & PAY</Buttons>
		</div>
	)
}

export default Summary
