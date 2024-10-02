import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './DevicesById.scss'
import { Rate } from 'antd'
import { CircleAlert, ShoppingBag, Truck } from 'lucide-react'
import ContentLoader from 'react-content-loader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/i18n'
import { useTranslation } from 'react-i18next'

interface item {
	name: string
	price: number
	category: string
	rating: number
}

export const DeviceById = () => {
	const { pathname } = useLocation()
	const [item, setItem] = useState<item>()
	const currentId = pathname.slice(1)
	const [ratings, setRatings] = useState<number[]>([])
	const [averageRating, setAverageRating] = useState<number>(0)
	const [isLoading, setIsLoading] = useState(true)

	const { t } = useTranslation()

	const handleRatingChange = async (value: number) => {
		const updatedRatings = [...ratings, value]

		try {
			await axios.patch(`https://3017bc59251b04dd.mokky.dev/items/${currentId}`, {
				ratings: updatedRatings,
			})
			console.log('Rating added successfully')
		} catch (error) {
			console.error('Error posting rating:', error)
		}
	}

	useEffect(() => {
		const fetchItem = async () => {
			try {
				const response = await axios.get(`https://3017bc59251b04dd.mokky.dev/items/${currentId}`)
				setItem(response.data)
			} catch (error) {
				console.error(error)
			} finally {
				setIsLoading(false)
			}
		}

		const fetchRatings = async () => {
			try {
				const response = await axios.get(`https://3017bc59251b04dd.mokky.dev/items/${currentId}`)
				const ratingsData = response.data.ratings || []

				setRatings(ratingsData)

				if (ratingsData.length > 0) {
					const average = ratingsData.reduce((sum: number, rate: number) => sum + rate, 0) / ratingsData.length
					setAverageRating(average)
				}
			} catch (error) {
				console.error('Error fetching ratings:', error)
			}
		}

		fetchItem()
		fetchRatings()
	}, [currentId, ratings, averageRating])

	const renderReviewText = (count: number[]) => {
		if (count.length === 0) {
			return 'нет отзывов'
		} else if (count.length === 1) {
			return '1 отзыв'
		} else if (count.length >= 2 && count.length <= 4) {
			return `${count.length} отзыва`
		} else {
			return `${count.length} отзывов`
		}
	}

	const addToCart = () => {
		if (item) {
			const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')

			const existingItem = cartItems.find((cartItem: item) => cartItem.name === item.name)

			if (existingItem) {
				existingItem.quantity += 1
			} else {
				cartItems.push({ ...item, quantity: 1 })
			}

			localStorage.setItem('cartItems', JSON.stringify(cartItems))

			console.log('Товар добавлен в корзину:', item)
			toast.success('Товар успешно добавлен в корзину')
		} else {
			toast.error('Не удалось добавить товар в корзину')
		}
	}


	if (isLoading) {
		return (
			<div className='container flex items-start justify-between'>
				<ContentLoader
					speed={2}
					width={300}
					height={150}
					viewBox="0 0 250 150"
					backgroundColor="#d9d9d9"
					foregroundColor="#ecebeb"
					className='rounded-xl pt-10'
				>
					<rect x="0" y="0" rx="12" ry="12" width="400" height="110" />
					<circle cx="626" cy="211" r="20" />
				</ContentLoader>
				<ContentLoader
					speed={2}
					width={560}
					height={330}
					viewBox="0 0 560 330"
					backgroundColor="#d9d9d9"
					foregroundColor="#ecebeb"
					className='rounded-xl pt-10'
				>
					<rect x="0" y="0" rx="12" ry="12" width="600" height="400" />
					<circle cx="626" cy="211" r="20" />
				</ContentLoader>
			</div>
		)
	}

	return (
		<div className='container flex justify-between items-start'>
			<div className='pt-10 flex flex-col items-start gap-7'>
				<h1 className='device__title'>
					{item?.name}
				</h1>
				<div className='flex items-center gap-5'>
					<Rate onChange={handleRatingChange} value={averageRating} />
					<span>
						{renderReviewText(ratings)}
					</span>
				</div>
			</div>
			<div className='pt-10'>
				<div className='border-2 border-black/20 rounded-xl p-5 flex flex-col items-start gap-5'>
					<p className='device__price'>
						{item?.price}$
					</p>
					<p className='flex items-center justify-between gap-3 w-full'>
						{t('deliveryInformation')}
						<span>
							<CircleAlert />
						</span>
					</p>
					<div className='flex items-start gap-2'>
						<Truck />
						<p className='flex flex-col items-start'>
							<span className='font-semibold text-lg'>
								{t('delivery')}
							</span>
							{t('deliveryTime')}
						</p>
					</div>
					<div className='h-[1px] bg-black/20 w-full mt-10' />
					<div className='w-full'>
						<button
							className='bg-[#12bf6c] text-white rounded-xl flex items-center gap-2 p-4 w-full justify-center'
							onClick={addToCart}
						>
							<ShoppingBag />
							<span>{t("addToCart")}</span>
						</button>
					</div>
					<ToastContainer className='absolute' />
				</div>
			</div>
		</div>
	)
}
