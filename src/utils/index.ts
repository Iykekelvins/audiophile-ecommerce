import { LenisOptions } from '@studio-freight/lenis'

export const scrollOptions: LenisOptions = {
	// duration: 1,
	// easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	orientation: 'vertical',
	gestureOrientation: 'vertical',
	smoothWheel: true,
	wheelMultiplier: 0.5,
	touchMultiplier: 1,
	infinite: false,
}

export const formatNum = (number: number | string) => {
	if (number === null || number === undefined) return
	return Intl.NumberFormat().format(
		Number(
			number.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			}) || '00'
		)
	)
}
