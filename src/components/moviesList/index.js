import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from '../movie'

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props
        return (
            <div className='MoviesList' style={{ paddingTop: '100px' }}>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID} className='MoviesList-item' style={{ alignItems: 'center' }}>
                                <Movie
                                    id={movie.imdbID}
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : movie.Poster}
                                />
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}