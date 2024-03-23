import gsap from 'gsap'

let isOpen: boolean = false
let isModalOpen: boolean = false

export const animateCart = () => {
	const cartTl = gsap.timeline()

	const cart = document.querySelector('.cart')
	const cartContainer = document.querySelector('.cart-container')

	const checkoutModal: HTMLDivElement | null = document.querySelector('.checkout-modal')

	if (checkoutModal?.style.opacity === '1') return

	if (!isOpen) {
		cartTl
			.to(cart, {
				opacity: 1,
				duration: 0.4,
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
					duration: 0.4,
					ease: 'power4.inOut',
				},
				'-=0.5'
			)

		isOpen = true
	} else {
		const closeTl = gsap.timeline()

		closeTl
			.to(cart, {
				opacity: 0,
				duration: 0.4,
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
					duration: 0.4,
					ease: 'power4.inOut',
				},
				'-=0.5'
			)

		isOpen = false
	}
}

export const animateModal = () => {
	const modalTl = gsap.timeline()

	const checkoutModal = document.querySelector('.checkout-modal')
	const checkoutModalContainer = document.querySelector('.checkout-modal-container')

	if (!isModalOpen) {
		modalTl
			.to(checkoutModal, {
				opacity: 1,
				duration: 0.4,
				pointerEvents: 'all',
			})
			.fromTo(
				checkoutModalContainer,
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

		isModalOpen = true
	} else {
		const closeTl = gsap.timeline()

		closeTl
			.to(checkoutModal, {
				opacity: 0,
				duration: 0.4,
				pointerEvents: 'none',
			})
			.fromTo(
				checkoutModalContainer,
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

		isModalOpen = false
	}
}
