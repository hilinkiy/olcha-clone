import { useEffect, useState } from 'react'
import './Cart.scss'
import { ShoppingBag } from 'lucide-react'
import { CartItem } from '@/components/cartItem/CartItem'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/i18n'
import { useTranslation } from 'react-i18next'

interface item {
  name: string
  price: number
  category: string
  rating: number
  quantity: number
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<item[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    setCartItems(storedItems)
  }, [])

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    return total.toFixed(2)
  }

  const handleRemoveItem = (name: string) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== name)
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    toast.success('Товар успешно удален из корзины')
  }

  const handleOrder = () => {
    const updatedCartItems = cartItems.filter((item) => item === null)
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    toast.success('Заказ успешно сделан!')
  }

  const incrementQuantity = (name: string) => {
    const updatedCartItems = cartItems.map(item =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const decrementQuantity = (name: string) => {
    const updatedCartItems = cartItems.map(item =>
      item.name === name && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <div className="container">
      <h1 className='text-left font-semibold text-5xl mb-10'>
        {t('basket')}
      </h1>
      <div className='cart__content'>
        {cartItems.length === 0 ? (
          <p>{t('emptyCart')}</p>
        ) : (
          <div className="border-2 border-black/20 rounded-xl p-5">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                price={item.price}
                category={item.category}
                quantity={item.quantity}
                onRemove={() => handleRemoveItem(item.name)}
                onIncrement={() => incrementQuantity(item.name)}
                onDecrement={() => decrementQuantity(item.name)}
              />
            ))}
          </div>
        )}
        <div className='border-2 border-black/20 rounded-xl p-5 flex flex-col justify-between'>
          <h2 className='text-xl mb-10 font-semibold'>
            {t('ovrPrice')}: {calculateTotalPrice()}$
          </h2>
          <button className="flex items-center gap-2 bg-[#da002b] text-white rounded-lg w-full py-3 justify-center" onClick={handleOrder}>
            <ShoppingBag />
            <span>{t(('order'))}</span>
          </button>
        </div>
      </div>
      <ToastContainer className='absolute' />
    </div>
  )
}
