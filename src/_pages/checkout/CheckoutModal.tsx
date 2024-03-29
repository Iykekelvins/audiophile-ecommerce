'use client'

import { useState } from 'react'
import { useCartStore } from '@/store'
import { formatNum } from '@/utils'
import { animateModal } from '@/utils/animations'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import Buttons from '@/components/Buttons'
import ScrollableBox from '@/components/scrollable-box'
import cn from '@/utils/cn'

import c from './checkout.module.scss'

const CheckoutModal = () => {
	const router = useRouter()
	const [show, setShow] = useState(false)

	const cartItems = useCartStore((state) => state.cartItems)
	const total = useCartStore((state) => state.total)
	const clearCart = useCartStore((state) => state.clearCart)

	const itemsAdded = cartItems.length > 0

	const img = (itemsAdded && cartItems[0].img) || '/'
	const name = (itemsAdded && cartItems[0].name) || ''
	const short_name = (itemsAdded && cartItems[0].short_name) || ''
	const price = (itemsAdded && cartItems[0].price) || ''
	const quantity = (itemsAdded && cartItems[0].quantity) || ''

	const remainingItems = (itemsAdded && cartItems.slice(1)) || []

	const handleCloseModal = () => {
		animateModal()
		setTimeout(() => {
			clearCart()
			router.replace('/')
		}, 500)
	}

	return (
		<div className={cn(c.modal, 'checkout-modal')} onClick={() => handleCloseModal()}>
			<ScrollableBox>
				<div
					className={cn(c['modal-container'], 'checkout-modal-container')}
					onClick={(e) => e.stopPropagation()}>
					<svg
						width='64'
						height='64'
						viewBox='0 0 64 64'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<circle cx='32' cy='32' r='32' fill='#D87D4A' />
						<path
							d='M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812'
							stroke='white'
							strokeWidth='4'
						/>
					</svg>

					<h2>
						THANK YOU <br /> FOR YOUR ORDER
					</h2>

					<p>You will receive an email confirmation shortly.</p>

					<div className={c['modal-container-overview']}>
						<div className={c['modal-container-overview-left']}>
							{!show ? (
								<div className={c['modal-container-overview-left-top']}>
									<Image src={img} height={32} width={28} alt={`image of our ${name}`} />

									<div className={c['modal-container-overview-left-top-right']}>
										<div>
											<h4>{short_name}</h4>
											<p>$ {formatNum(price)}</p>
										</div>

										<p className={c.qty}>x{quantity}</p>
									</div>
								</div>
							) : (
								<ul>
									{cartItems.map((item) => (
										<div className={c['modal-container-overview-left-top']} key={item.id}>
											<Image
												src={item.img}
												height={30}
												width={28}
												alt={`image of our ${item.name}`}
											/>

											<div className={c['modal-container-overview-left-top-right']}>
												<div>
													<h4>{item.short_name}</h4>
													<p>$ {formatNum(item.price)}</p>
												</div>

												<p className={c.qty}>x{item.quantity}</p>
											</div>
										</div>
									))}
								</ul>
							)}
							{remainingItems.length > 0 && (
								<>
									<div className={c.line}></div>

									<button className={c.others} onClick={() => setShow(!show)}>
										{!show ? `and ${remainingItems.length} other item(s)` : 'View less'}
									</button>
								</>
							)}
						</div>

						<div
							className={cn(c['modal-container-overview-right'], show ? c.justify : '')}>
							<h4>GRAND TOTAL</h4>

							<p>$ {formatNum(total)}</p>
						</div>
					</div>

					<Buttons type='primary' className={c.back} onClick={() => handleCloseModal()}>
						BACK TO HOME
					</Buttons>
				</div>
			</ScrollableBox>
		</div>
	)
}

export default CheckoutModal
