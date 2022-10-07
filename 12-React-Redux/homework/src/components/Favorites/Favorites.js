import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => (
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <span>{movie.title}</span>
                </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}> X </button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
