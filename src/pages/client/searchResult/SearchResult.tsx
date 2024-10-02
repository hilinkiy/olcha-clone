import axios from 'axios'
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface product {
	id: number
	name: string
	category: string
	price: number
}

export default function SearchResults() {
	const location = useLocation()
	const [searchResults, setSearchResults] = useState<product[]>([])
	const query = new URLSearchParams(location.search).get('query')

	useEffect(() => {
		if (query) {
			const fetchSearchResults = async () => {
				try {
					const response = await axios.get(`https://3017bc59251b04dd.mokky.dev/items`)
					const data = response.data.filter((item: product) =>
						item.name.toLowerCase().includes(query.toLowerCase())
					)
					setSearchResults(data)
				} catch (error) {
					console.error('Error fetching search results:', error)
				}
			}

			fetchSearchResults()
		}
	}, [query])

	return (
		<div className="container">
			<h1 className="text-5xl font-semibold my-5 text-left">Поиск</h1>
			{searchResults.length === 0 ? (
				<p>Ничего не найдено</p>
			) : (
				<div className='grid grid-cols-4 gap-5'>
					{searchResults.map(product => (
						<Link to={`/${product.id}`} className='card__slide' key={product.id}>
							<h5 className='card__title'>{product.name}</h5>
							<p className='card__price'>{product.price}$</p>
							<p className='card__tick-price'>{Math.floor(product.price / 12)}$ x 12 month</p>
							<div className='card__buttons'>
								<button className='p-1 border-2 border-black rounded-lg'>
									<ShoppingCart />
								</button>
								<button className='border-2 border-[#da002b] text-[#da002b] p-1 rounded-lg'>
									В рассрочку
								</button>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
