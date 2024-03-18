'use client'

import { useRouter } from 'next/navigation'
import { ICartItem } from '@/utils/types'
import { formatNum } from '@/utils'
import { animateCart } from '@/utils/animations'

import Image from 'next/image'
import Buttons from '../Buttons'

import c from './Cart.module.scss'
import cn from '@/utils/cn'

export const CartItem = ({ img, name, price, quantity }: ICartItem) => {
	return (
		<li className={c['cart-item']}>
			<div className={c['cart-item-left']}>
				<div className={c['cart-item-left-img']}>
					<Image src={img} width={40} height={40} alt={`image of our ${name}`} />
				</div>

				<div>
					<h4>{name}</h4>
					<h5>${formatNum(price)}</h5>
				</div>
			</div>

			<div className={c['cart-item-right']}>
				<button className={c.minus}>
					<svg
						width='5'
						height='2'
						viewBox='0 0 5 2'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							opacity='0.25'
							d='M0.550508 1.516V0.2875H4.45051V1.516H0.550508Z'
							fill='black'
						/>
					</svg>
				</button>

				<span>1</span>

				<button className={c.plus}>
					<svg
						width='7'
						height='7'
						viewBox='0 0 7 7'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							opacity='0.25'
							d='M2.89362 6.258V3.931H0.566621V2.7025H2.89362V0.382H4.12212V2.7025H6.43612V3.931H4.12212V6.258H2.89362Z'
							fill='black'
						/>
					</svg>
				</button>
			</div>
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

	return (
		<div className={cn(c.cart, 'cart')} onClick={() => animateCart()}>
			<div
				className={cn(c['cart-container'], 'cart-container')}
				onClick={(e) => e.stopPropagation()}>
				<header>
					<h3>
						cart (<span>3</span>)
					</h3>

					<button>Remove all</button>
				</header>

				<ul>
					<CartItem
						img='/images/headphones/xx59.png'
						name='xx59'
						price={2999}
						quantity={1}
					/>
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
