import gsap from 'gsap'

let isOpen: boolean = false

export const animateCart = () => {
	const cartTl = gsap.timeline({ paused: true })

	const cart = document.querySelector('.cart')
	const cartContainer = document.querySelector('.cart-container')

	cartTl
		.to(cart, {
			opacity: 1,
			duration: 0.5,
			pointerEvents: 'all',
		})
		.fromTo(
			cartContainer,
			{
				yPercent: 20,
				opacity: 0,
			},
			{
				yPercent: 0,
				opacity: 1,
				duration: 0.2,
			},
			'-=0.5'
		)

	if (!isOpen) {
		cartTl.play()
		isOpen = true
	} else {
		const closeTl = gsap.timeline()

		closeTl
			.to(cart, {
				opacity: 0,
				duration: 0.5,
				pointerEvents: 'none',
			})
			.fromTo(
				cartContainer,
				{
					yPercent: 0,
					opacity: 1,
				},
				{
					yPercent: 20,
					opacity: 0,
					duration: 0.2,
				},
				'-=0.5'
			)

		isOpen = false
	}
}
