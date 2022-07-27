// Styles
import { Label, Input } from './SignUp.styles'

const SignUp = ({ username, password, confirmPassword, handleChange }) => {
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

			<div>
				<Label htmlFor='confirmPassword'>Confirm Password</Label>
				<Input
					type='password'
					id='confirmPassword'
					name='confirmPassword'
					value={confirmPassword}
					aria-label='confirmPassword'
					onChange={handleChange}
				/>
			</div>
		</>
	)
}

export default SignUp
