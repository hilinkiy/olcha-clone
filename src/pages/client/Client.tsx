import './Client.scss'
import { RedHeader } from '@/components/red_header/RedHeader'
import { Navbar } from '@/components/navbar/Navbar'
import DeviceId from './device/DeviceId'
import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import IndexClient from './index/Index'
import SearchResult from './searchResult/SearchResult'
import '@/i18n'

function Client() {
  return (
    <div>
      <RedHeader />
      <Navbar />
      <Routes>
        <Route path='/' element={<IndexClient />} />
        <Route path='/:id' element={<DeviceId />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<SearchResult />} />
      </Routes>
    </div>
  )
}

export default Client
