import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const Register = () => {
	const { register, handleSubmit } = useForm()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async () => {
		try {
			await axios.post('https://3017bc59251b04dd.mokky.dev/register', {
				name: name,
				email: email,
				password: password
			})
		} catch (err) {
			console.error('Registration failed. Please try again.', err)
		}
	}

	return (
		<div className='bg-black/60 w-screen h-screen flex items-center justify-center'>
			<form
				className='bg-white rounded-xl w-1/3 text-black m-auto flex flex-col p-8'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h6 className='text-4xl'>
					Register
				</h6>
				<label className='flex flex-col gap-2 items-start'>
					<label htmlFor="email" className='text-md'>Email:</label>
					<input
						value={email}
						type="text"
						placeholder="Enter email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Invalid email format"
							}
						})}
						onChange={(e) => setEmail(e.target.value)}
						className='bg-transparent p-4 mt-2 mb-5 border-2 border-black rounded-xl w-full outline-none'
					/>
				</label>

				<label className='flex flex-col gap-2 items-start'>
					<label htmlFor="password" className='text-md'>Name:</label>
					<input
						value={name}
						type="text"
						placeholder="Enter name"
						{...register("name", { required: "Name is required" })}
						onChange={(e) => setName(e.target.value)}
						className='bg-transparent p-4 mt-2 mb-5 border-2 border-black rounded-xl w-full outline-none'
					/>
				</label>

				<label className='flex flex-col gap-2 items-start'>
					<label htmlFor="password" className='text-md'>Password:</label>
					<input
						value={password}
						type="password"
						placeholder="Enter password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Password must be at least 6 characters long"
							}
						})}
						onChange={(e) => setPassword(e.target.value)}
						className='bg-transparent p-4 mt-2 mb-5 border-2 border-black rounded-xl w-full outline-none'
					/>
				</label>

				<div className='flex items-center gap-5 justify-center'>
					<button className='auth__button'>Register</button>
				</div>
				<div className='w-full text-center mt-5 text-white flex gap-2 items-center justify-center'>
					<span className='text-black/60'>Already have an account? </span>
					<Link to='/login' className='underline text-black'>Log in here.</Link>
				</div>
			</form>
		</div>
	)
}
