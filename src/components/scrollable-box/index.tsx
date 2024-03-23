import { Lenis } from '@studio-freight/react-lenis'
import { ReactNode } from 'react'
import { scrollOptions } from '@/utils'

import cn from '@/utils/cn'

import c from './scrollable.module.scss'

const ScrollableBox = ({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<Lenis options={{ ...scrollOptions }} className={cn(c.hi, className)}>
			{children}
		</Lenis>
	)
}

export default ScrollableBox
