// Styles
import { Label, Input } from './Login.styles'

const Login = ({ username, password, handleChange }) => {
	return (
		<>
			<div>
				<Label htmlFor='username'>Username</Label>
				<Input
					type='text'
					id='username'
					name='username'
					value={username}
					aria-label='username'
					onChange={handleChange}
				/>
			</div>

			<div>
				<Label htmlFor='password'>Password</Label>
				<Input
					type='password'
					id='password'
					name='password'
					value={password}
					aria-label='password'
					onChange={handleChange}
				/>
			</div>
		</>
	)
}

export default Login
