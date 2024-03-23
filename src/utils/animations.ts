import gsap from 'gsap'

let isOpen: boolean = false

export const animateCart = (type = '') => {
	const cartTl = gsap.timeline()

	const cart = document.querySelector('.cart')
	const cartContainer = document.querySelector('.cart-container')

	const checkoutModal = document.querySelector('.checkout-modal')
	const checkoutModalContainer = document.querySelector('.checkout-modal-container')

	if (!isOpen) {
		cartTl
			.to(!type ? cart : checkoutModal, {
				opacity: 1,
				duration: 0.4,
				pointerEvents: 'all',
			})
			.fromTo(
				!type ? cartContainer : checkoutModalContainer,
				{
					yPercent: 20,
					opacity: 0,
				},
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.4,
					ease: 'power4.inOut',
				},
				'-=0.5'
			)

		isOpen = true
	} else {
		const closeTl = gsap.timeline()

		closeTl
			.to(!type ? cart : checkoutModal, {
				opacity: 0,
				duration: 0.4,
				pointerEvents: 'none',
			})
			.fromTo(
				!type ? cartContainer : checkoutModalContainer,
				{
					yPercent: 0,
					opacity: 1,
				},
				{
					yPercent: 20,
					opacity: 0,
					duration: 0.4,
					ease: 'power4.inOut',
				},
				'-=0.5'
			)

		isOpen = false
	}
}
