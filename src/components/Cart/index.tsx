'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
					<h5>${formatNum(product.price * product.quantity)}</h5>
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

	const handleCloseCart = () => {
		animateCart()

		setTimeout(() => {
			router.push('/checkout')
		}, 500)
	}

	const cartItems = useCartStore((state) => state.cartItems)
	const clearCart = useCartStore((state) => state.clearCart)

	return (
		<div className={cn(c.cart, 'cart')} onClick={() => animateCart()}>
			<div
				className={cn(c['cart-container'], 'cart-container')}
				onClick={(e) => e.stopPropagation()}>
				<header>
					<h3>
						cart (<span>{cartItems.length}</span>)
					</h3>

					<button onClick={() => clearCart()}>Remove all</button>
				</header>

				<ul>
					{cartItems.map((item: ICartItem) => (
						<CartItem key={item.id} product={item} />
					))}
				</ul>

				<footer>
					<div>
						<h4>TOTAL</h4>
						<h4>$ 5,396</h4>
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
