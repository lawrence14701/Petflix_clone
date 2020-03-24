import * as VideoUtil from '../util/videos_util';




export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';
export const RECEIVE_SINGLE_GENRE = 'RECEIVE_SINGLE_GENRE';
export const RECEIVE_SINGLE_MOVIE = "RECEIVE_SINGLE_MOVIE"

const receiveGenres = (payload) => {
    const { genres, movies } = payload
    return {
        type: RECEIVE_ALL_GENRES,
        genres,
        movies,
    }
}

const receiveGenre = (genre) => ({
    type: RECEIVE_SINGLE_GENRE,
    genre
})



export const fetchAllGenres = () => (dispatch) => {
    return VideoUtil.fetchGenres()
        .then(genres => {
            return dispatch(receiveGenres(genres))
        })
}
const receiveMovie = (movie) => ({
    type: RECEIVE_SINGLE_MOVIE,
    movie
})


export const fetchMovie = (movieId) => (dispatch) => {
    return VideoUtil.fetchMovie(movieId)
        .then(movie => (dispatch(receiveMovie(movie))))
}

export const fetchGenre = (genreId) => (dispatch) => {
    return VideoUtil.fetchGenre(genreId)
        .then(genre => (dispatch(receiveGenre(genre))))
}
