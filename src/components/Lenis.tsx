'use client'

import { scrollOptions } from '@/utils'
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'
import { ReactNode } from 'react'

const Lenis = ({ children }: { children: ReactNode }) => {
	return (
		<ReactLenis
			root
			options={{
				...scrollOptions,
			}}>
			{children}
		</ReactLenis>
	)
}

export default Lenis
