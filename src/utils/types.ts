export interface IProduct {
	category: string
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
