'use client'

import { useEffect, useMemo, useState } from 'react'
import { products } from '@/utils/data'
import { IProduct } from '@/utils/types'
import { formatNum } from '@/utils'
import { Type, useCartStore } from '@/store'

import Image from 'next/image'
import Buttons from '../Buttons'
import Link from 'next/link'
import cn from '@/utils/cn'

import c from './PageItems.module.scss'

export const CartUnit = ({
	id,
	unit,
	setUnit,
}: {
	id: number
	unit: number
	setUnit: (e: any) => void
}) => {
	const updateItem = useCartStore((state) => state.updateItem)
	const removeItem = useCartStore((state) => state.removeItem)

	const updateUnitCount = (type: Type) => {
		if (type === 'add') {
			setUnit((unit: number) => unit + 1)

			updateItem(id, 'add')
		} else {
			if (unit !== 1) {
				setUnit((unit: number) => unit - 1)

				updateItem(id, 'subtract')
			} else {
				removeItem(id)
			}
		}
	}

	return (
		<>
			<button className={c.minus} onClick={() => updateUnitCount('subtract')}>
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
			<span>{unit}</span>
			<button className={c.plus} onClick={() => updateUnitCount('add')}>
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
		</>
	)
}

export const PageItem = ({ product, qty }: { product: IProduct; qty?: boolean }) => {
	const cartItems = useCartStore((state) => state.cartItems)
	const addItem = useCartStore((state) => state.addItem)

	const isItemInCart = cartItems.find((item) => item.id === product.id)

	// number of units of particular product user wants to buy
	const [unit, setUnit] = useState<number>(1)

	const handleAddToCart = () =>
		!isItemInCart
			? addItem({
					img: product.img,
					short_name: product.short_name,
					name: product.name,
					price: product.price,
					quantity: unit,
					id: product.id,
			  })
			: null

	useMemo(() => {
		if (cartItems.length === 0) setUnit(1)
	}, [cartItems.length])

	return (
		<li className={cn(c['products-item'], qty ? c.qty : '')}>
			<div className={c['products-item-img']}>
				<Image
					src={product.img}
					width={350}
					height={385}
					alt={`photo of our ${product.name}`}
					className={c[`${product.category}`]}
				/>

				<svg
					width='253'
					height='123'
					viewBox='0 0 253 123'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.152113' filter='url(#filter0_f_0_4469)'>
						<ellipse cx='126.5' cy='61.5' rx='82.5' ry='17.5' fill='black' />
					</g>
					<defs>
						<filter
							id='filter0_f_0_4469'
							x='0.507492'
							y='0.507492'
							width='251.985'
							height='121.985'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='21.7463'
								result='effect1_foregroundBlur_0_4469'
							/>
						</filter>
					</defs>
				</svg>
			</div>

			<div className={c['products-item-info']}>
				{product.new && <h4>NEW PRODUCT</h4>}

				<h2>{product.name}</h2>

				<p>{product.info}</p>

				{!qty ? (
					<Link href={`/${product.category}/${product.slug}`}>
						<Buttons type='primary'>see product</Buttons>
					</Link>
				) : (
					<div className={c['products-item-info-price']}>
						<h4>$ {formatNum(product.price)}</h4>

						<footer>
							<div>
								<CartUnit
									id={product.id}
									unit={!isItemInCart ? unit : isItemInCart.quantity}
									setUnit={setUnit}
								/>
							</div>

							<Buttons type='primary' onClick={() => handleAddToCart()}>
								ADD TO CART
							</Buttons>
						</footer>
					</div>
				)}
			</div>
		</li>
	)
}

const PageItems = ({ category }: { category: string }) => {
	const categories = products.filter((product) => product.category === category)

	return (
		<ul className={c.products}>
			{categories.map((category) => (
				<PageItem key={category.id} product={category} />
			))}
		</ul>
	)
}

export default PageItems
