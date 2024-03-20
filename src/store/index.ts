import { create } from 'zustand'

export type Type = 'add' | 'subtract'

type CartItem = {
	short_name: string
	img: string
	price: number
	id: number
	quantity: number
}

type State = {
	cartItems: CartItem[]
}

type Actions = {
	addItem: ({ ...props }: CartItem) => void
	updateItem: (id: number, type: Type) => void
	removeItem: (id: number) => void
	clearCart: () => void
}

export const useCartStore = create<State & Actions>()((set) => ({
	cartItems: [],
	addItem: ({ ...props }) =>
		set((state) => ({
			cartItems: [...state.cartItems, { ...props }],
		})),

	updateItem: (id: number, type: Type) =>
		set((state) => ({
			cartItems: state.cartItems.map((item) =>
				item.id === id
					? {
							...item,
							quantity: type === 'add' ? item.quantity + 1 : (item.quantity -= 1),
					  }
					: item
			),
		})),

	removeItem: (id: number) =>
		set((state) => ({
			cartItems: state.cartItems.filter((item) => item.id !== id),
		})),

	clearCart: () =>
		set(() => ({
			cartItems: [],
		})),
}))
