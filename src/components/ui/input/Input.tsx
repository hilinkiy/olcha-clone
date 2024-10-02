import { Input } from 'antd'

interface inputProps {
	placeholder: string
	value: string
}

const InputText = ({ placeholder }: inputProps) => <Input placeholder={placeholder} />

export default InputText