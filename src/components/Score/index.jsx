// Components
import { Copywrite } from '../Home/Home.styles'

// Styles
import {
	ScoreCard,
	ScoreTitle,
	Username,
	UserScore,
	RestartButton
} from './Score.styles'

const Score = ({
	setPageState,
	setCurrentQuestion,
	activeUser,
	score,
	setScore,
	questionsLength,
	questionsAnswered,
	restart
}) => {
	const restartQuiz = () => {
		setPageState('menu')
		setScore(0)
		setCurrentQuestion(0)
		restart()
	}

	return (
		<>
			<ScoreCard>
				<ScoreTitle>Score</ScoreTitle>
				<Copywrite>
					Nice work <Username>{activeUser.username}</Username>, you have
					answered{' '}
					<span className='questions-answered'>{questionsAnswered}</span>{' '}
					questions!
					<br /> Here's your score
				</Copywrite>
				<UserScore>
					{score} / {questionsLength}
				</UserScore>
				<RestartButton onClick={restartQuiz}>Restart Quiz</RestartButton>
			</ScoreCard>
		</>
	)
}

export default Score
