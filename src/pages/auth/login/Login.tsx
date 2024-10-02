import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'

export const Login = () => {
	const { handleSubmit } = useForm()

	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async () => {
		try {
			await axios.post('https://3017bc59251b04dd.mokky.dev/auth', {
				email: email,
				password: password
			})

			navigate('/admin')
		} catch (err) {
			console.error('Error while logging in.', err)
		}
	}

	return (
		<div className='bg-black/60 w-screen h-screen flex items-center justify-center'>
			<form
				className='bg-white rounded-xl w-1/3 text-black m-auto flex flex-col p-8'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h6 className='text-4xl'>
					Login
				</h6>
				<label className='flex flex-col gap-2 items-start'>
					<label htmlFor="email" className='text-md'>Email:</label>
					<input
						value={email}
						type="text"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
						className='bg-transparent p-4 mt-2 mb-5 border-2 border-black rounded-xl w-full outline-none'
					/>
				</label>

				<label className='flex flex-col gap-2 items-start'>
					<label htmlFor="password" className='text-md'>Password:</label>
					<input
						value={password}
						type="password"
						placeholder="Enter password"
						onChange={(e) => setPassword(e.target.value)}
						className='bg-transparent p-4 mt-2 mb-5 border-2 border-black rounded-xl w-full outline-none'
					/>
				</label>

				<div className='flex items-center gap-5 justify-center'>
					<button className='auth__button'>Login</button>
				</div>
				<div className='w-full text-center mt-5 text-white flex gap-2 items-center justify-center'>
					<span className='text-black/60'>Don't have an account yet? </span>
					<Link to='/register' className='underline text-black'>Register.</Link>
				</div>
			</form>
		</div>
	)
}
