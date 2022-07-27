import { useEffect, useState } from 'react'

// Components
import Home from './components/Home'
import Quiz from './components/Quiz'

// Hooks
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'

// React Router
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

// Utils
import { shuffle } from './utils/shuffle'

// Styles
import GlobalStyle from './GlobalStyle'

const App = () => {
	const API_URL = process.env.REACT_APP_API_URL
	const USERS_KEY = process.env.REACT_APP_USERS_KEY
	const ACTIVE_USER_KEY = process.env.REACT_APP_ACTIVE_USER_KEY

	const navigate = useNavigate()

	const [pageState, setPageState] = useState('login')
	const { questions } = useFetch(API_URL, pageState)
	const [answers, setAnwers] = useState([])
	const [score, setScore] = useState(0)
	const [users, setUsers] = useLocalStorage(USERS_KEY, [])
	const [activeUser, setActiveUser] = useLocalStorage(ACTIVE_USER_KEY, null)

	useEffect(() => {
		const answersData = questions.map(question => {
			const shuffledAnswer = shuffle([
				question.correct_answer,
				...question.incorrect_answers
			])

			return shuffledAnswer
		})

		setAnwers(answersData)
	}, [questions])

	useEffect(() => {
		if (activeUser === null) {
			navigate('/', { replace: true })
		} else {
			navigate('/quiz', { replace: true })
		}
	}, [activeUser, navigate])

	return (
		<>
			<Routes>
				<Route
					index
					path='/'
					element={
						<Home
							pageState={pageState}
							setPageState={setPageState}
							users={users}
							setUsers={setUsers}
							setActiveUser={setActiveUser}
						/>
					}
				/>
				<Route
					path='/quiz'
					element={
						<Quiz
							pageState={pageState}
							setPageState={setPageState}
							activeUser={activeUser}
							setActiveUser={setActiveUser}
							questions={questions}
							answers={answers}
							score={score}
							setScore={setScore}
						/>
					}
				/>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<GlobalStyle />
		</>
	)
}

export default App
