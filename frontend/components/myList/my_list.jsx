import React from "react";
import Slider from '../slider/slider';

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: 6,
    };
  }

  componentDidMount() {
    this.props.fetchMyList();
    this.props.fetchAllGenres();
    this.props.hideArrowsOnMyList("false");
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.updatePageItems.bind(this));
    }
  }

  updatePageItems() {
    let windowWidth = window.innerWidth;
    let showItems = 1;
    if (windowWidth > 1800) {
      showItems = 6;
    } else if (windowWidth > 1260) {
      showItems = 5;
    } else if (windowWidth > 980) {
      showItems = 4;
    } else if (windowWidth > 768) {
      showItems = 3;
    } else if (windowWidth > 600) {
      showItems = 2;
    }
    this.setState({
      showItems,
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const windowWidth = window.innerWidth;

  //   let showItemsNewVal;
  //   if (windowWidth > 1800) {
  //     showItemsNewVal = 6;
  //   } else if (windowWidth > 1260) {
  //     showItemsNewVal = 5;
  //   } else if (windowWidth > 980) {
  //     showItemsNewVal = 4;
  //   } else if (windowWidth > 768) {
  //     showItemsNewVal = 3;
  //   } else if (windowWidth > 600) {
  //     showItemsNewVal = 2;
  //   }

  //   if (showItemsNewVal && prevState.showItems !== showItemsNewVal) {
  //     this.setState({ showItems: showItemsNewVal });
  //   }
  //   if(prevProps.myList !== this.props.myList){
  //     console.log('update')
  //     this.forceUpdate()
  //   }
  // }

 

  render() {
    const { movies, showArrows, myList } = this.props;
    console.log(myList);
    const { showItems } = this.state;
    if (Object.getOwnPropertyNames(movies).length !== 0) {
      let movieList = [];
      Object.values(myList).forEach((movieId) => {
        let id = movieId.movie_id;
        let movie = movies[id];
        if (!movieList.includes(movie)) {
          movieList.push(movie);
        } else {
          //destroy
        }
      });
      let totalMovies = Object.values(movieList);
      let movieRows = [];
      let numberOfRows = totalMovies.length / showItems;

      for (let i = 0; i < numberOfRows; i++) {
        let movieRow = [];
        for (let j = 0; j < showItems; j++) {
          let movie = totalMovies.pop();
          if (movie) {
            movieRow.push(movie);
          }
        }
        movieRows.push(movieRow);
      }
      return (
        <>
          <div className="gallery-title">
            <div id="genre-title">My List</div>
          </div>
          {movieRows.map((movieRow, idx) => {
            return (
              <>
                <Slider key={idx} movies={movieRow} showArrows={showArrows} />
              </>
            );
          })}
        </>
      );
    } else {
      return null;
    }
  }
}

export default MyList;
