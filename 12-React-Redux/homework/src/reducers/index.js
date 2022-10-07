const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavorites: [...state.moviesFavorites, action.payload]
            }

        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };

        case "REMOVE_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
            }

        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            }


        default:
            return state;
    }
}