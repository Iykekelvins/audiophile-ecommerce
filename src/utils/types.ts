export interface IProduct {
	category: string
	short_name: string
	slug: string
	name: string
	info: string
	img: string
	quantity: number
	price: number
	id: number
	new: boolean
	features: {
		first: string
		second: string
	}
	items: {
		quantity: number
		extraItem: string
	}[]
	gallery: {
		first: string
		second: string
		third: string
	}
	others: {
		name: string
		img: string
		href: string
	}[]
}

export interface ICartItem {
	name: string
	short_name: string
	img: string
	id: number
	price: number
	quantity: number
	isSummaryPdt?: boolean
}

export interface ICheckout {
	name: string
	email: string
	phone_number: string
	address: string
	zip_code: string
	city: string
	country: string
	eMoney: string
	eMoneyPin: string
}
