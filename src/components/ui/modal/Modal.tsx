import React, { useState, useEffect } from 'react'
import { Button, Input, Modal, Select } from 'antd'
import './Modal.scss'
import { PlusCircle } from 'lucide-react'
import { addItem } from '@/features/tableSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

interface CategoryOption {
  value: string
  label: string
}

const ModalWindow: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState<string | number>('')
  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get('https://3017bc59251b04dd.mokky.dev/category')

      if (Array.isArray(data)) {
        const options = data.map((item: { name: string }) => ({
          value: item.name,
          label: item.name,
        }))
        setCategoryOptions(options)
      } else {
        console.error('Expected data to be an array, but got:', data)
      }
    }

    fetchCategory()
  }, [])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleAdd = () => {
    setIsModalOpen(false)
    dispatch(addItem({ name, keyword, category, price }))
    setName('')
    setKeyword('')
    setCategory('')
    setPrice('')
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
            Price (in dollar):
          </h4>
          <Input
            placeholder='Enter price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
        <label>
          <h4 className='modal__input-title mt-3'>
            Category:
          </h4>
          <Select
            showSearch
            value={category}
            onChange={(value) => setCategory(value)}
            options={categoryOptions}
            placeholder='Select a category'
            className='w-[100px]'
          />
        </label>
      </Modal>
    </>
  )
}

export default ModalWindow
