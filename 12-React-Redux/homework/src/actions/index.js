const apiKey = "e88ab17a";

export function getMovies(titulo) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "GET_MOVIES",
                    payload: json
                })
            })
    }
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            .then(response => response.json())
            .then(detail => {
                dispatch({
                    type: "GET_MOVIE_DETAIL",
                    payload: detail
                })
            })
    }
}
export function addMovieFavorite(title) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload: title
    }
}

export function removeMovieFavorite(id) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        id
    }
}

