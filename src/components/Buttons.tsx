import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

interface IButton {
	type: 'primary' | 'secondary' | 'plain'
	children: ReactNode
}

const Buttons = ({ type, children }: IButton) => {
	return (
		<button
			className={cn(
				'btn',
				type === 'primary'
					? 'btn-primary'
					: type === 'secondary'
					? 'btn-secondary'
					: 'btn-plain'
			)}>
			{children}
		</button>
	)
}

export default Buttons
