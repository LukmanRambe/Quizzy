import styled from 'styled-components'

export const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.2rem 1rem;
	background: var(--blue);

	@media only screen and (min-width: 992px) {
		padding: 1.2rem 10rem;
	}
`

export const Title = styled.h1`
	color: var(--lightest-blue);
	font-size: 2rem;
	line-height: 2.5rem;
	letter-spacing: 0.02em;

	@media only screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
`

export const LogoutBtn = styled.button`
	padding: 0 1rem;
	border: none;
	border-radius: 7px;
	font-size: 1.1rem;
	font-weight: 700;
	letter-spacing: 0.02em;
	color: var(--lightest-blue);
	background: transparent;

	:hover {
		cursor: pointer;
		color: var(--light-blue);
	}

	:active,
	:focus {
		outline: none;
	}
`
