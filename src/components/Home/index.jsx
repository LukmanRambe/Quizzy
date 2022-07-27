// Components
import Login from '../Login'
import SignUp from '../SignUp'
import ButtonGroup from './ButtonGroup'

// Hooks
import { useState } from 'react'

// Library
import { AES, enc } from 'crypto-js'

// React Router
import { useNavigate } from 'react-router-dom'

// Styles
import {
	Container,
	Content,
	Title,
	Card,
	CardTitle,
	Form,
	Copywrite
} from './Home.styles'

const Home = ({ pageState, setPageState, users, setUsers, setActiveUser }) => {
	const navigate = useNavigate()

	const [userInputs, setUserInputs] = useState({
		username: '',
		password: '',
		confirmPassword: ''
	})
	const { username, password, confirmPassword } = userInputs

	const handleChange = e => {
		setUserInputs(prevState => {
			return {
				...prevState,
				[e.target.name]: e.target.value
			}
		})
	}

	const handleClick = () => {
		setPageState(prevState => (prevState === 'login' ? 'signup' : 'login'))
	}

	const handleSubmit = e => {
		e.preventDefault()

		const userObj = {
			id: new Date().getTime().toString(),
			username,
			password: AES.encrypt(
				password,
				process.env.REACT_APP_CIPHERTEXT
			).toString()
		}
		const userData = users.find(user => user.username === username)

		if (pageState === 'login') {
			if (username.trim() !== '' && password.trim() !== '') {
				if (userData) {
					const decryptedPassword = AES.decrypt(
						userData.password,
						process.env.REACT_APP_CIPHERTEXT
					)

					if (decryptedPassword.toString(enc.Utf8) !== password) {
						setUserInputs({ username, password, confirmPassword: '' })
						alert('Wrong Password')
					} else {
						setActiveUser({
							username: userData.username
						})
						setUserInputs({ username: '', password: '', confirmPassword: '' })
						alert('Login success!')
						setPageState('menu')
						navigate('/quiz', { replace: true })
					}
				} else {
					alert('Username not found!')
				}
			} else {
				alert('Fill in all the fields!')
			}
		}

		if (pageState === 'signup') {
			if (
				username.trim() !== '' &&
				password.trim() !== '' &&
				confirmPassword.trim() !== ''
			) {
				if (userData) {
					alert('Username already taken!')
				} else {
					if (password.length < 8) {
						alert('Password must be at least 8 characters')
					} else {
						if (
							password.toLowerCase().trim() !==
							confirmPassword.toLowerCase().trim()
						) {
							alert("Password doesn't match!")
						} else {
							setUserInputs({ username: '', password: '', confirmPassword: '' })
							setUsers(prevState => {
								return [...prevState, userObj]
							})
							alert('Sign Up Success!')
							setPageState('login')
						}
					}
				}
			} else {
				alert('Fill in all the fields!')
			}
		}
	}

	return (
		<Container>
			<Content>
				<Title>Quizzy</Title>
				<Copywrite>
					Test your knowledge with trivial questions <br /> Have fun and enjoy
				</Copywrite>
				<Card>
					<CardTitle>{pageState === 'login' ? 'Login' : 'Sign Up'}</CardTitle>
					<Form onSubmit={handleSubmit}>
						{pageState === 'login' ? (
							<Login
								handleChange={handleChange}
								handleClick={handleClick}
								username={username}
								password={password}
							/>
						) : (
							<SignUp
								handleChange={handleChange}
								handleClick={handleClick}
								username={username}
								password={password}
								confirmPassword={confirmPassword}
							/>
						)}

						<div className='btn-group'>
							<ButtonGroup pageState={pageState} handleClick={handleClick} />
						</div>
					</Form>
				</Card>
			</Content>
		</Container>
	)
}

export default Home
