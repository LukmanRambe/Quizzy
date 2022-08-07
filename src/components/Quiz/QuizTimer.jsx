import { useEffect } from 'react'

// Utils
import { formatSeconds } from '../../utils/formatSeconds'

// Styles
import { Timer, StartButton } from './Quiz.styles'
import { Copywrite } from './Quiz.styles'

const QuizTimer = ({
	questions,
	pageState,
	setPageState,
	activeUser,
	setScore,
	setOptionChosen,
	setQuestionsAnswered,
	start,
	stop,
	seconds
}) => {
	const handleStart = () => {
		setScore(0)
		setQuestionsAnswered(0)
		setOptionChosen(null)
		setPageState('playing')
		start()
	}

	useEffect(() => {
		if (seconds <= 0) {
			stop()
			setPageState('finished')
		}
	}, [seconds, setPageState, stop])

	return (
		<>
			{pageState === 'playing' ? (
				<Timer>
					Time Remaining <br /> <span></span>
					<span>{formatSeconds(seconds)}</span>
				</Timer>
			) : (
				pageState !== 'finished' && (
					<>
						<Copywrite>
							<h1>Hello, {activeUser.username}!</h1>
							You have <span>{questions.length}</span> questions and{' '}
							<span>{formatSeconds(seconds)}</span> minute to answers it all
						</Copywrite>
						<StartButton onClick={handleStart}>Start Quiz</StartButton>
					</>
				)
			)}
		</>
	)
}

export default QuizTimer
