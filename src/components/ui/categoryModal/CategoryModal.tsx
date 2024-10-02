import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import './CategoryModal.scss'
import { PlusCircle } from 'lucide-react'
import { addCategory } from '@/features/categorySlice'
import { useDispatch } from 'react-redux'

const CategoryModal: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [name, setName] = useState('')
	const [keyword, setKeyword] = useState('')
	const dispatch = useDispatch()

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleAdd = () => {
		setIsModalOpen(false)
		dispatch(addCategory({ name, keyword }))
		setName('')
		setKeyword('')
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<Button className='modal__btn' type="primary" onClick={showModal}>
				<PlusCircle />
				Add
			</Button>
			<Modal title="Basic Modal" open={isModalOpen} onOk={handleAdd} onCancel={handleCancel}>
				<label>
					<h4 className='modal__input-title'>
						Name:
					</h4>
					<Input
						placeholder='Enter name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					<h4 className='modal__input-title mt-3'>
						Keyword:
					</h4>
					<Input
						placeholder='Enter keyword'
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</label>
			</Modal>
		</>
	)
}

export default CategoryModal