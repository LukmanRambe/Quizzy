import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;
	background: var(--lightest-blue);
`

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`

export const Title = styled.h1`
	color: var(--dark-blue);
	font-weight: 700;
	font-size: 2rem;
`

export const Copywrite = styled.p`
	color: var(--blue);
	text-align: center;

	span {
		color: var(--dark-blue);
		font-weight: 700;
	}

	.questions-answered {
		color: var(--dark-blue);
		font-weight: 700;
	}
`

export const Card = styled.div`
	width: 100%;
	max-width: 25rem;
	margin-top: 1rem;
	padding: 1.5rem;
	background: var(--white);
	border: 2px solid var(--light-blue);
	border-radius: 7px;

	.btn-group {
		margin-top: 1.5rem;

		p {
			font-size: 0.9rem;
			text-align: center;
			margin-top: 1rem;
			letter-spacing: 0.05em;

			span {
				color: var(--blue);

				:hover {
					cursor: pointer;
					color: var(--dark-blue);
				}
			}
		}
	}
`

export const CardTitle = styled.h3`
	text-align: center;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	color: var(--dark-blue);
`

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 1rem;

	div {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`

export const Button = styled.button`
	font-size: 1rem;
	font-weight: 700;
	padding: 0.5rem 1rem;
	color: var(--lightest-blue);
	background: var(--blue);
	border: 2px solid transparent;
	border-radius: 7px;

	:hover,
	:active,
	:focus {
		cursor: pointer;
		outline: 0;
		background: var(--dark-blue);
	}
`
