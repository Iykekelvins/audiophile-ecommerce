'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { formatNum } from '@/utils'
import { animateCart } from '@/utils/animations'
import { useCartStore } from '@/store'
import { CartUnit } from '../PageItems'
import { ICartItem } from '@/utils/types'

import Image from 'next/image'
import Buttons from '../Buttons'
import cn from '@/utils/cn'

import c from './Cart.module.scss'

export const CartItem = ({
	product,
	isSummaryPdt,
}: {
	product: ICartItem
	isSummaryPdt?: boolean
}) => {
	const [unit, setUnit] = useState<number>(product.quantity)

	const cartItems = useCartStore((state) => state.cartItems)

	const isItemInCart = cartItems.find((item) => item.id === product.id)

	return (
		<li className={c['cart-item']}>
			<div className={c['cart-item-left']}>
				<div className={c['cart-item-left-img']}>
					<Image
						src={product.img}
						width={40}
						height={45}
						alt={`image of our ${product.name}`}
					/>
				</div>

				<div>
					<h4>{product.short_name}</h4>
					<h5>$ {formatNum(product.price)}</h5>
				</div>
			</div>

			{!isSummaryPdt ? (
				<div className={c['cart-item-right']}>
					<CartUnit id={product.id} unit={product.quantity} setUnit={setUnit} />
				</div>
			) : (
				<h4 className={c.qty}>x{!isItemInCart ? unit : isItemInCart.quantity}</h4>
			)}
		</li>
	)
}

const Cart = () => {
	const router = useRouter()
	const pathname = usePathname()

	const cartItems = useCartStore((state) => state.cartItems)
	const clearCart = useCartStore((state) => state.clearCart)

	const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

	const handleCloseCart = () => {
		animateCart()

		setTimeout(() => {
			router.push('/checkout')
		}, 500)
	}

	if (cartItems.length === 0) {
		return (
			<div className={cn(c.cart, 'cart')} onClick={() => animateCart()}>
				<div
					className={cn(c['cart-container'], c['empty'], 'cart-container')}
					onClick={(e) => e.stopPropagation()}>
					<Image
						src='/icons/cart-empty.svg'
						height={100}
						width={100}
						alt='empty cart icon'
					/>

					<p>Your cart is empty</p>

					<Buttons
						type='primary'
						onClick={() => {
							animateCart()

							if (pathname === '/checkout') {
								router.push('/')
							}
						}}>
						Continue Shopping
					</Buttons>
				</div>
			</div>
		)
	}

	return (
		<div className={cn(c.cart, 'cart')} onClick={() => animateCart()}>
			<div
				className={cn(c['cart-container'], 'cart-container')}
				onClick={(e) => e.stopPropagation()}>
				<header>
					<h3>
						cart (<span>{cartItems.length}</span>)
					</h3>

					{<button onClick={() => clearCart()}>Remove all</button>}
				</header>

				<ul>
					{cartItems.map((item: ICartItem) => (
						<CartItem key={item.id} product={item} />
					))}
				</ul>

				<footer>
					<div>
						<h4>TOTAL</h4>
						<h4>$ {formatNum(total)}</h4>
					</div>

					<Buttons type='primary' onClick={() => handleCloseCart()}>
						checkout
					</Buttons>
				</footer>
			</div>
		</div>
	)
}

export default Cart
