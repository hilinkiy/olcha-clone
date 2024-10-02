import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import type { TableProps } from 'antd'
import './Table.scss'
import axios from 'axios'

interface DataType {
  key: number
  name: string
  keyword: string
  category: string
  images: string
  price: number
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '№',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Price (in dollars)',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Keyword',
    dataIndex: 'keyword',
    key: 'keyword',
  },
]



const fetchItems = async (): Promise<DataType[]> => {
  const response = await axios.get('https://3017bc59251b04dd.mokky.dev/items')
  return response.data
}

const Tablet: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems()
        setDataSource(data)
      } catch (error) {
        console.error('Error fetching items:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return <Table columns={columns} dataSource={dataSource} loading={loading} rowKey="key" />
}

export default Tablet
