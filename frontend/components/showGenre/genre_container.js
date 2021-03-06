import { connect } from "react-redux";
import { fetchGenre, fetchAllGenres, showArrows, receiveShowItems } from "../../actions/video_actions";
import Genre from "./genre";

const mstp = (state, ownprops) => {
  return {
    genre: state.entities.genres[ownprops.match.params.genreId],
    genres: Object.values(state.entities.genres),
    movies: state.entities.movies,
    showArrows: state.entities.showArrows,
    showItems: state.entities.showItems,
  };
};

const mdtp = (dispatch) => ({
  fetchGenre: (genre) => dispatch(fetchGenre(genre)),
  fetchAllGenres: () => dispatch(fetchAllGenres()),
  hideArrowsOnGenres: (hide) => dispatch(showArrows(hide)),
  updateShowItems: (showItems) => dispatch(receiveShowItems(showItems)),
});

export default connect(mstp, mdtp)(Genre);
