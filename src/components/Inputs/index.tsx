import cn from '@/utils/cn'
import c from './Inputs.module.scss'

interface IInput {
	name: string
	value: string
	placeholder: string
	label: string
	type: 'text' | 'number'
	error?: boolean
	onChange: (e: any) => void
}

const Inputs = ({ ...props }: IInput) => {
	return (
		<div className={cn(c.input, props.error ? c.error : '')}>
			<div className={c['input-label']}>
				<label htmlFor={props.name}>{props.label}</label>
				<span>Wrong format</span>
			</div>

			<input
				type={props.type}
				value={props.value}
				name={props.name}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
		</div>
	)
}

export default Inputs
