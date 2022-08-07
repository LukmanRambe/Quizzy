import styled from 'styled-components'

export const Container = styled.div`
	min-height: 100vh;
	background: var(--lightest-blue);
`

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`

export const Copywrite = styled.div`
	color: var(--blue);
	text-align: center;
	margin-top: 4rem;

	h1 {
		font-size: 2.2rem;
		margin-bottom: 1rem;
	}

	span {
		color: var(--dark-blue);
		font-weight: 700;
	}
`

export const StartButton = styled.button`
	font-weight: 700;
	font-size: 1rem;
	letter-spacing: 0.01em;
	padding: 1rem 3rem;
	color: var(--lightest-blue);
	border: 2px solid transparent;
	border-radius: 7px;
	background: var(--blue);
	align-self: center;
	margin-top: 3rem;

	:hover,
	:active,
	:focus {
		outline: none;
		cursor: pointer;
		background: var(--dark-blue);
	}
`

export const Timer = styled.div`
	text-align: center;
	font-weight: 700;
	color: var(--dark-blue);
	font-size: 1.3rem;
	margin-top: 2rem;

	span {
		font-weight: 600;
	}
`

export const QuestionCard = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	align-self: center;
	margin: 3rem;
	margin-top: 1rem;
	width: 100%;
	max-width: 35rem;
	min-height: 23rem;
	background: var(--white);
	border: 2px solid var(--blue);
	border-radius: 7px;
	padding: 2rem 1.5rem;
`

export const Question = styled.p`
	color: var(--dark-blue);
	letter-spacing: 0.01em;
`

export const Answers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1.2rem 0;
`

export const Option = styled.button`
	text-align: start;
	font-size: 0.9rem;
	color: var(--dark-blue);
	padding: 0.5rem 1rem;
	background: transparent;
	border: 2px solid var(--blue);
	border-radius: 7px;

	:hover,
	:active,
	:focus {
		cursor: pointer;
		outline: none;
		color: var(--lightest-blue);
		background: var(--blue);
	}

	&.chosen {
		outline: none;
		background: var(--dark-blue);
		color: var(--lightest-blue);
		border: 2px solid var(--dark-blue);
	}
`

export const NextButton = styled.div`
	position: absolute;
	bottom: -2rem;
	align-self: center;
	text-align: center;
	color: var(--lightest-blue);
	background: var(--blue);
	padding: 1.2rem 1.3rem;
	border: 2px solid transparent;
	border-radius: 100%;
	display: flex;

	.arrow-right {
		font-size: 1.2rem;
	}

	:hover,
	:focus,
	:active {
		cursor: pointer;
		outline: 0;
		background: var(--dark-blue);
	}
`
