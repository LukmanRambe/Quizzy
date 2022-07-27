import { Container, Title, LogoutBtn } from './Navbar.styles'

// React Router
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setActiveUser, setPageState }) => {
	const navigate = useNavigate()

	const handleLogout = () => {
		setActiveUser(null)
		setPageState('login')
		navigate('/', { replace: true })
		alert('You are logged out!')
	}

	return (
		<Container>
			<Title>Quizzy</Title>
			<LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
		</Container>
	)
}

export default Navbar
