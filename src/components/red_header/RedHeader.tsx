import './RedHeader.scss'
import { Select } from 'antd'
import '@/i18n'
import { useTranslation } from 'react-i18next'
import { setObjectToLocalStorage } from '@/localstorage/setToLocalStorage'

const options = [
	{
		value: 'ru',
		label: 'RU',
	},
	{
		value: 'uz',
		label: 'UZ',
	},
	{
		value: 'en',
		label: 'EN',
	},
]

export function RedHeader() {
	const { t, i18n } = useTranslation()

	const handleLanguageChange = (value: string) => {
		i18n.changeLanguage(value)
		setObjectToLocalStorage('lng', value)
	}


	return (
		<div className='red__header'>
			<div className='flex items-center justify-between container'>
				<ul className='red__list'>
					<li>
						<button className='red__list-link'>
							{t('plan')}
						</button>
					</li>
					<li>
						<button className='red__list-link'>
							{t('sales')}
						</button>
					</li>
					<li>
						<button className='red__list-link'>
							{t('draws')}
						</button>
					</li>
				</ul>
				<ul className='flex items-center gap-4'>
					<li>
						<button className='red__number'>
							+998 (99) 180-55-65
						</button>
					</li>
					<li>
						<button className='red__button'>
							{t('sell')}
						</button>
					</li>
					<li>
						<Select
							placeholder="Select a language"
							optionFilterProp="label"
							options={options}
							className='w-40 h-[37px]'
							onChange={handleLanguageChange} value={i18n.language}
						/>
					</li>
				</ul>
			</div>
		</div>
	)
}