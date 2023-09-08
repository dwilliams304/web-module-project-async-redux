import { gifsdata } from "../data/gifsdata";
import { API_FETCH_START,
        API_FETCH_SUCCESS,
        API_FETCH_ERROR } from "../actions";

const initialState = {
    gifs: gifsdata,
    isFetching: false,
    error: ''
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case API_FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: '',
                gifs: action.payload
            };
        case API_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                gifs: action.payload
            };
        case API_FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                gifs: []
            };
        default:
            return state;
    }
}


export default reducer;