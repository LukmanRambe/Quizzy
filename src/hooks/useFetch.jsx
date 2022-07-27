import { useEffect, useState } from 'react'

const useFetch = (API_URL, pageState) => {
	const [questions, setQuestions] = useState([])

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const response = await fetch(API_URL)
				const data = await response?.json()
				const questionsData = data?.results

				setQuestions(questionsData)
			} catch (err) {
				throw new Error(err)
			}
		}

		fetchQuestions()
	}, [API_URL, pageState])

	return { questions }
}

export default useFetch
