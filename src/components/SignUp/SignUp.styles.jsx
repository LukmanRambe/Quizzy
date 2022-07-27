import styled from 'styled-components'

export const Label = styled.label`
	color: var(--dark-blue);
	font-weight: 600;
	margin-bottom: 0.2rem;
`

export const Input = styled.input`
	padding: 0.5rem;
	border: 2px solid var(--light-blue);
	border-radius: 7px;
	caret-color: var(--blue);

	:focus,
	:active {
		outline: none;
		border: 2px solid var(--blue);
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
