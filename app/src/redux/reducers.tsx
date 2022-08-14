import { SET_ACCESS_TOKEN, SET_NEWS_DATA } from "./actions";

const initialState = {
    newsData: [],
    accessToken: ""
}

function newsReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_NEWS_DATA:
            return { ...state, newsData: action.payload }
        case SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }
        default:
            return state;
    }
}

export default newsReducer;