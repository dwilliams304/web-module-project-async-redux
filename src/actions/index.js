import { BASE_URL, API_KEY } from "../constants/constants";
import axios from "axios";


export const API_FETCH_START = 'API_FETCH_START';
export const API_FETCH_SUCCESS = 'API_FETCH_SUCCESS';
export const API_FETCH_ERROR = 'API_FETCH_ERROR';



export const fetchGIFS = (input) => {
    return(dispatch => {
        dispatch(fetchStart())
        axios.get(`${BASE_URL}api_key=${API_KEY}&q=${input}&limit=15`)
            .then(res => {
                dispatch(fetchSuccess(res.data.data))
            })
            .catch(err => {
                dispatch(fetchError(err.response.status))
            })
    })
}

export const fetchStart = () => {
    return({type: API_FETCH_START})
}

export const fetchSuccess = (gifs) => {
    return({type: API_FETCH_SUCCESS, payload: gifs})
}

export const fetchError = (error) => {
    return({type: API_FETCH_ERROR, paylod: error})
}