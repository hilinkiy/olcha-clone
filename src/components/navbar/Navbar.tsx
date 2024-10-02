import { useState } from 'react'
import { ChartNoAxesColumn, CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react'
import './Navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '@/i18n'

export function Navbar() {
	const [searchQuery, setSearchQuery] = useState('')
	const navigate = useNavigate()
	const { t } = useTranslation()

	const handleSearch = (event: React.FormEvent) => {
		event.preventDefault()
		if (searchQuery.trim()) {
			navigate(`/search?query=${searchQuery}`)
		}
	}

	return (
		<div className='py-5'>
			<div className='container flex items-center justify-between gap-5'>
				<div className='flex items-center gap-6'>
					<Link to='/' className='nav__logo'>
						olcha
					</Link>
					<button className='nav__button'>
						<Menu />
						{t('catalog')}
					</button>
				</div>
				<form onSubmit={handleSearch} className='flex items-center gap-0.5 w-full'>
					<input
						placeholder={t('searchCatalog')}
						className='nav__input outline-none'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button type='submit' className='bg-[#da002b] h-full rounded-lg py-3 px-5'>
						<Search className='text-white' />
					</button>
				</form>
				<ul className='flex items-center gap-5'>
					<li>
						<button className='nav__list-btn'>
							<ChartNoAxesColumn />
							{t('comparing')}
						</button>
					</li>
					<li>
						<Link to='/cart' className='nav__list-btn'>
							<ShoppingCart />
							{t('basket')}
						</Link>
					</li>
					<li>
						<Link to='/login' className='nav__list-btn'>
							<CircleUserRound />
							{t('login')}
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
