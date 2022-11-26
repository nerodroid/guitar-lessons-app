export const SET_NEWS_DATA = "SET_NEWS_DATA";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export const setNewsData = (newsData: any) => (dispatch: any) => {
    dispatch({
        type: SET_NEWS_DATA,
        payload: newsData
    })
}

export const setAccessToken = (accessToken: any) => (dispatch: any) => {
    dispatch({
        type: SET_ACCESS_TOKEN,
        payload: accessToken
    })
}