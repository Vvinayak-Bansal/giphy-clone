import api from "./api";

const GIPHY_BASE_URL = `https://api.giphy.com/v1/gifs/`;

const DEFAULT_PARAMS = {
    api_key: process.env.REACT_APP_GIPHY_APP_KEY,
    limit: 50,
}

export const fetchTrendingGiphys = () => {
   return api.get("trending",{
        baseURL: GIPHY_BASE_URL,
        params: DEFAULT_PARAMS,
    })

}

export const fetchSearchedGiphys = (query) =>{
    return api.get("search",{
        baseURL: GIPHY_BASE_URL,
        params: {
            ...DEFAULT_PARAMS,
            q: query,
        }
    })

}