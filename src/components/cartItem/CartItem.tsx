import { Trash2 } from 'lucide-react'
import './CartItem.scss'
import { toast, ToastContainer } from 'react-toastify'

interface cartItemProps {
	price: number
	name: string
	category: string
	onRemove: () => void
	onIncrement: () => void
	onDecrement: () => void
	quantity: number
}

export const CartItem = ({ price, name, category, onRemove, onIncrement, onDecrement, quantity }: cartItemProps) => {

	const remove = () => {
		toast.success('Товар успешно удален из корзины')
		onRemove()
	}

	return (
		<div>
			<div className='flex items-center justify-between gap-4'>
				<h4 className='text-xl'>
					{name}
				</h4>
				<span className='flex items-center'>
					<span className='flex items-center border-2 border-black justify-between px-4 py-1 rounded-xl gap-5 w-[110px] mr-5'>
						<button className='text-lg font-semibold w-[15px]' onClick={onDecrement}>
							-
						</button>
						<p>
							{quantity}
						</p>
						<button className='text-lg font-semibold w-[15px]' onClick={onIncrement}>
							+
						</button>
					</span>
					<p className='font-semibold text-xl w-[100px]'>
						{price * quantity}$
					</p>
				</span>
			</div>
			<p className='text-left text-black/50 mt-3'>
				{category}
			</p>
			<div className='flex items-center justify-start mt-5'>
				<button className='bg-[#da002b] text-white rounded-lg px-4 py-2 flex items-center gap-2' onClick={remove}>
					<Trash2 />
					Удалить
				</button>
			</div>
			<div className='h-[2px] w-full bg-black/20 mt-5 mb-5' />
			<ToastContainer className='absolute' />
		</div>
	)
}
