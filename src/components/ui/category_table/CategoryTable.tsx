import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import type { TableProps } from 'antd'
import './CategoryTable.scss'
import axios from 'axios'

interface DataType {
	key: number
	name: string
	keyword: string
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
		title: 'Keyword',
		dataIndex: 'keyword',
		key: 'keyword',
	},

]

const CategoryTable: React.FC = () => {
	const [dataSource, setDataSource] = useState()

	useEffect(() => {
		const fetchItems = async () => {
			const { data } = await axios.get('https://3017bc59251b04dd.mokky.dev/category')

			setDataSource(data)
		}

		fetchItems()
	}, [])

	return <Table columns={columns} dataSource={dataSource} rowKey="key" />
}

export default CategoryTable