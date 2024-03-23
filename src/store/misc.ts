import { ICheckout } from '@/utils/types'
import { create } from 'zustand'

export type Type = 'add' | 'subtract'

type State = {
	payload: ICheckout
	checkOutErrors: boolean
	selectedPayment: string
}

type Actions = {
	setPayload: (payload: ICheckout) => void
	setCheckoutErrors: (checkOutErrors: boolean) => void
	setSelectedPayment: (selectedPayment: string) => void
}

export const useMiscStore = create<State & Actions>()((set) => ({
	payload: {
		name: '',
		email: '',
		phone_number: '',
		address: '',
		zip_code: '',
		city: '',
		country: '',
		eMoney: '',
		eMoneyPin: '',
	},
	checkOutErrors: false,
	selectedPayment: 'e-Money',

	setPayload: (payload: ICheckout) =>
		set(() => ({
			payload,
		})),

	setCheckoutErrors: (checkOutErrors: boolean) =>
		set(() => ({
			checkOutErrors,
		})),

	setSelectedPayment: (selectedPayment: string) =>
		set(() => ({
			selectedPayment,
		})),
}))
