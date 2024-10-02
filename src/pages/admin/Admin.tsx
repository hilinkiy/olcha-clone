import React from 'react'
import { Layout, Select, theme } from 'antd'
import './Admin.scss'
import { Sidebar } from '@/components/ui/sidebar/Sidebar'
import { Link, Route, Routes } from 'react-router-dom'
import AdminDevices from './devices/Devices'
import AdminCategory from './category/Category'

const { Header, Content } = Layout

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

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout className='h-screen'>
      <Sidebar />
      <Layout>
        <Header style={{
          background: colorBgContainer,
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 24,
        }}>
          <h1 className='admin__header-title'>
            Olcha admin
          </h1>
          <div>
            <Select
              placeholder="Select a language"
              optionFilterProp="label"
              options={options}
              className='w-40 h-[37px]'
            />
            <Link to='/' className='bg-gray-600 px-3 py-2 rounded-full text-white hover:text-white ml-3'>
              H
            </Link>
          </div>
        </Header>
        <Content
          style={{
            margin: '10px 16px',
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path='/devices' element={<AdminDevices />} />
            <Route path='/category' element={<AdminCategory />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
