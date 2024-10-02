import axios from 'axios'
import { Card } from '../card/Card'
import './Filter.scss'
import { useEffect, useState } from 'react'
import CardLoader from '../ui/cardLoader/CardLoader'
import '@/i18n'
import { useTranslation } from 'react-i18next'

interface item {
	name: string
	category: string | null
	price: number
	id: number
	rating: number[]
}

const fetchItems = async () => {
	const response = await axios.get('https://3017bc59251b04dd.mokky.dev/items')
	return response.data
}

export const Filter = () => {
	const [items, setItems] = useState<item[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const { t } = useTranslation()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchItems()
				const filteredItems = selectedCategory
					? data.filter((item: item) => item.category === selectedCategory)
					: data
				setItems(filteredItems)
			} catch (error) {
				console.error('Error fetching items:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [selectedCategory])

	const filters = [
		{
			id: 1,
			category: 'Laptop',
			title: t('laptop')
		},
		{
			id: 2,
			category: 'Earphone',
			title: t('headphone')
		},
		{
			id: 3,
			category: 'Phone',
			title: t('phone')
		},
		{
			id: 4,
			category: 'Monitor',
			title: t('monitor')
		},
		{
			id: 5,
			category: 'Tv',
			title: t('tv')
		},
		{
			id: 6,
			category: null,
			title: t('all')
		},
	]

	const skeletons = [
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
	]

	const selectCategory = (category: string | null) => {
		setSelectedCategory(category)
	}

	return (
		<div className='container'>
			<div className='flex items-center justify-between flex-wrap mt-5 overflow-auto'>
				{filters.map(filter => (
					<button key={filter.id} className={selectedCategory === filter.category ? 'filter__active-button' : 'filter__button'} onClick={() => selectCategory(filter.category)}>
						{filter.title}
					</button>
				))}
			</div>
			{isLoading ? (
				<div className='card__parent'>
					{skeletons.map(skeleton => (
						<CardLoader key={skeleton.id} />
					))}
				</div>
			) : (
				<div className='card__parent'>
					{items.map((item, index) => (
						<Card key={index} name={item.name} price={item.price} id={item.id} />
					))}
				</div>
			)}
		</div>
	)
}