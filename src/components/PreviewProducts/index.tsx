'use client'

import { usePathname } from 'next/navigation'
import { previewProducts } from '@/utils/mock'

import Image from 'next/image'
import Link from 'next/link'
import Buttons from '../Buttons'

import c from './PreviewProducts.module.scss'

interface IProduct {
	img: string
	title: string
	href: string
	width: number
	height: number
}

const PreviewProduct = ({ img, title, href, width, height }: IProduct) => {
	return (
		<li className={c['products-item']}>
			<header>
				<Image
					src={img}
					width={width}
					height={height}
					alt={`preview image of ${title.toLowerCase()}`}
				/>
				<svg
					width='209'
					height='106'
					viewBox='0 0 209 106'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g filter='url(#filter0_f_0_8417)'>
						<ellipse cx='104.5' cy='53' rx='61' ry='9' fill='black' />
					</g>
					<defs>
						<filter
							id='filter0_f_0_8417'
							x='0.00749207'
							y='0.507492'
							width='208.985'
							height='104.985'
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
								result='effect1_foregroundBlur_0_8417'
							/>
						</filter>
					</defs>
				</svg>
			</header>

			<h4>{title}</h4>

			<Link href={href}>
				<Buttons type='plain'>
					<span>SHOP</span>
					<svg
						width='8'
						height='12'
						viewBox='0 0 8 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M1.3219 1L6.3219 6L1.3219 11' stroke='#D87D4A' strokeWidth='2' />
					</svg>
				</Buttons>
			</Link>
		</li>
	)
}

const PreviewProductsItems = () => {
	return (
		<section className={c.products}>
			<ul>
				{previewProducts.map((product) => (
					<PreviewProduct key={product.title} {...product} />
				))}
			</ul>
		</section>
	)
}

const PreviewProducts = ({ hide }: { hide?: boolean }) => {
	const pathname = usePathname()

	return (
		<>
			{!hide ? (
				<PreviewProductsItems />
			) : hide && pathname === '/' ? (
				<></>
			) : hide && pathname === '/checkout' ? (
				<></>
			) : (
				<PreviewProductsItems />
			)}
		</>
	)
}

export default PreviewProducts
