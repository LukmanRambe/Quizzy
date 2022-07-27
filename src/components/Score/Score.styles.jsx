import styled from 'styled-components'

export const ScoreCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-self: center;
	margin: 3rem;
	width: 100%;
	max-width: 35rem;
	min-height: 23rem;
	background: var(--white);
	border: 2px solid var(--blue);
	border-radius: 7px;
	padding: 2rem 1.5rem;
`

export const ScoreTitle = styled.h3`
	text-align: center;
	font-size: 1.5rem;
	color: var(--dark-blue);
`

export const Username = styled.span`
	color: var(--dark-blue);
	font-weight: 700;
	letter-spacing: 0.05em;
`

export const UserScore = styled.p`
	font-size: 3rem;
	font-weight: 700;
	text-align: center;
	color: var(--dark-blue);
`

export const RestartButton = styled.button`
	font-weight: 700;
	font-size: 1rem;
	letter-spacing: 0.01em;
	padding: 1rem 3rem;
	color: var(--lightest-blue);
	border: 2px solid transparent;
	border-radius: 7px;
	background: var(--blue);
	align-self: center;

	:hover,
	:active,
	:focus {
		outline: none;
		cursor: pointer;
		background: var(--dark-blue);
	}
`
