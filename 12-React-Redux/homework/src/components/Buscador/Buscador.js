import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';

import { getMovies, addMovieFavorite } from './../../actions/index.js'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => (
              <h3 key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                <button
                  onClick={(title) =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID
                    })
                  }
                >FAV</button>
              </h3>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    movies: state.moviesLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: title => dispatch(getMovies(title)),
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Buscador);
