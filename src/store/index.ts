import { ICartItem } from '@/utils/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Type = 'add' | 'subtract'

type State = {
	cartItems: ICartItem[]
	total: number
}

type Actions = {
	addItem: ({ ...props }: ICartItem) => void
	updateItem: (id: number, type: Type) => void
	removeItem: (id: number) => void
	clearCart: () => void
	setTotal: (total: number) => void
}

export const useCartStore = create<State & Actions>()(
	persist(
		(set) => ({
			cartItems: [],
			total: 0,
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
									quantity: type === 'add' ? item.quantity + 1 : item.quantity - 1,
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

			setTotal: (total) =>
				set(() => ({
					total,
				})),
		}),
		{ name: 'audiophile-store' }
	)
)
