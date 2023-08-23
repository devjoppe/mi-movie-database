import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3'
const APIKEY = import.meta.env.VITE_API_KEY

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    params: {
        api_key: APIKEY
    }
})

const fetch = async<T>(endpoint: string) => {
    const response = await instance.get<T>(endpoint)
    return response.data
}

// Testing the API request by fetching all genre
export const fetchGenre = () => {
    return fetch('/genre/movie/list')
}