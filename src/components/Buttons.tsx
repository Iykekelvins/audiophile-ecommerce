import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

interface IButton {
	type: 'primary' | 'secondary' | 'tertiary' | 'plain'
	className?: string
	onClick?: () => void
	children: ReactNode
}

const Buttons = ({ type, className, onClick, children }: IButton) => {
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
					: 'btn-plain',
				className
			)}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Buttons
