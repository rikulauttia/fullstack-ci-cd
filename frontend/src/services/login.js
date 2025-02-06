import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL
	? `${import.meta.env.VITE_BACKEND_URL}/api/login`
	: 'http://localhost:3001/api/login'

const login = async (credentials) => {
	const response = await axios.post(baseUrl, credentials)
	return response.data
}

export default { login }
