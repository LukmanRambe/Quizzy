import { useEffect, useState } from 'react'

const useTimer = duration => {
	const [status, setStatus] = useState('OFF')
	const [seconds, setSeconds] = useState(duration)

	const start = () => {
		setStatus('ON')
		setSeconds(duration)
	}

	const stop = () => {
		setStatus('OFF')
		setSeconds(0)
	}

	const restart = () => {
		setStatus('OFF')
		setSeconds(duration)
	}

	useEffect(() => {
		let interval = null

		if (status === 'ON') {
			interval = setInterval(() => {
				setSeconds(prevState => prevState - 1)
			}, 1000)
		}

		return () => clearInterval(interval)
	}, [status])

	return { start, restart, stop, seconds }
}

export default useTimer
