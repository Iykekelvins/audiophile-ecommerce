import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

interface IButton {
	type: 'primary' | 'secondary' | 'tertiary' | 'plain'
	onClick?: () => void
	children: ReactNode
}

const Buttons = ({ type, onClick, children }: IButton) => {
	return (
		<button
			className={cn(
				'btn',
				type === 'primary'
					? 'btn-primary'
					: type === 'secondary'
					? 'btn-secondary'
					: type === 'tertiary'
					? 'btn-tertiary'
					: 'btn-plain'
			)}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Buttons
