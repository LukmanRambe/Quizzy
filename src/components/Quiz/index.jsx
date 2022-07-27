// Hooks
import { useEffect, useState } from 'react'
import useTimer from '../../hooks/useTimer'

// Components
import Navbar from '../Navbar'
import Score from '../Score'
import QuizTimer from './QuizTimer'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

// Libraries
import he from 'he'

// Styles
import {
	Container,
	Content,
	QuestionCard,
	Question,
	Answers,
	Option,
	NextButton
} from './Quiz.styles'

const Quiz = ({
	questions,
	answers,
	activeUser,
	setActiveUser,
	pageState,
	setPageState,
	score,
	setScore
}) => {
	const { start, restart, stop, seconds } = useTimer(60)

	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [currentAnswers, setCurrentAnswers] = useState([])
	const [optionChosen, setOptionChosen] = useState(null)
	const [questionsAnswered, setQuestionsAnswered] = useState(0)

	const chooseOption = option => {
		setOptionChosen(option)
	}

	const handleNext = () => {
		if (optionChosen === null) {
			alert('Pick an option!')
		} else {
			if (questions[currentQuestion].correct_answer === optionChosen) {
				setScore(prevState => prevState + 1)
				setOptionChosen(null)
			}

			setQuestionsAnswered(prevState => prevState + 1)
			setCurrentQuestion(prevState => prevState + 1)
			setOptionChosen(null)
		}
	}

	const handleSubmit = () => {
		if (questions[currentQuestion].correct_answer === optionChosen) {
			setScore(prevState => prevState + 1)
		}

		stop()
		setQuestionsAnswered(prevState => prevState + 1)
		setOptionChosen(null)
		setPageState('finished')
	}

	useEffect(() => {
		setCurrentAnswers(answers[currentQuestion])
	}, [currentQuestion, answers])

	return (
		<Container>
			<Navbar setActiveUser={setActiveUser} setPageState={setPageState} />
			<Content>
				<QuizTimer
					pageState={pageState}
					setPageState={setPageState}
					score={score}
					setScore={setScore}
					setOptionChosen={setOptionChosen}
					start={start}
					restart={restart}
					seconds={seconds}
					questions={questions}
					setQuestionsAnswered={setQuestionsAnswered}
					stop={stop}
				/>
				{pageState === 'playing' && (
					<>
						<QuestionCard>
							<Question>
								{`${currentQuestion + 1}. ${he.decode(
									questions[currentQuestion].question
								)}`}
							</Question>
							<Answers>
								{currentAnswers.map((answer, index) => {
									return (
										<Option
											key={index}
											onClick={() => chooseOption(answer)}
											className={optionChosen === answer ? 'chosen' : ''}>
											{he.decode(answer)}
										</Option>
									)
								})}
							</Answers>
							<NextButton
								onClick={currentQuestion < 4 ? handleNext : handleSubmit}>
								{currentQuestion < 4 ? (
									<FaArrowRight className='arrow-right' />
								) : (
									<FaCheck />
								)}
							</NextButton>
						</QuestionCard>
					</>
				)}
				{pageState === 'finished' && (
					<Score
						setPageState={setPageState}
						setCurrentQuestion={setCurrentQuestion}
						activeUser={activeUser}
						score={score}
						setScore={setScore}
						questionsLength={questions.length}
						questionsAnswered={questionsAnswered}
						setQuestionsAnswered={setQuestionsAnswered}
						restart={restart}
					/>
				)}
			</Content>
		</Container>
	)
}

export default Quiz
