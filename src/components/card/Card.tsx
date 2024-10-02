import { ShoppingCart } from 'lucide-react'
import './Card.scss'
import { Rate } from 'antd'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '@/i18n'
import { useTranslation } from 'react-i18next'

interface CardProps {
  name: string
  price: number
  id: number
}

export function Card({ name, price, id }: CardProps) {
  const tickPrice = Math.floor(price / 12)
  const [averageRating, setAverageRating] = useState<number>(0)

  const { t } = useTranslation()

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get(`https://3017bc59251b04dd.mokky.dev/items/${id}`)
        const ratingsData = response.data.ratings || []

        if (ratingsData.length > 0) {
          const average = ratingsData.reduce((sum: number, rate: number) => sum + rate, 0) / ratingsData.length
          setAverageRating(average)
        }
      } catch (error) {
        console.error('Error fetching ratings:', error)
      }
    }

    fetchRatings()
  }, [id])



  return (
    <Link to={`/${id}`} className='card__slide'>
      <h5 className='card__title'>{name}</h5>
      <p className='card__price'>{price}$</p>
      <p className='card__tick-price'>{tickPrice}$ x 12 {t('month')}</p>
      <Rate
        disabled
        value={averageRating}
      />
      <div className='card__buttons'>
        <button className='p-1 border-2 border-black rounded-lg'>
          <ShoppingCart />
        </button>
        <button className='border-2 border-[#da002b] text-[#da002b] p-1 rounded-lg'>
          {t('inInstallments')}
        </button>
      </div>
    </Link>
  )
}
