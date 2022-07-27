// Styles
import { Button } from './Home.styles'

const SubmitBtn = ({ pageState, handleClick }) => {
	return (
		<>
			<Button type='submit'>
				{pageState === 'login' ? 'Login' : 'Sign Up'}
			</Button>
			<p>
				{pageState === 'login' ? 'New to Quizzy?' : 'Already have an account?'}
				<span className='link' onClick={handleClick}>
					{pageState === 'login' ? ' Sign Up' : ' Login'}
				</span>
			</p>
		</>
	)
}

export default SubmitBtn
