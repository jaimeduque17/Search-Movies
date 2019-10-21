import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../../components/buttonBackToHome'

const API_KEY = '20cb1df1'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })
            })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount() {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }

    render() {

        const { Title, Actors, Country, Released, Type, imdbRating, Poster } = this.state.movie

        return (
            <div className="Detail" style={{
                display: 'flex',
                justifContent: 'center',
                paddingLeft: '100px'
            }}>
                <div className="Detail__card" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: '50px',
                    boxSizing: 'border-box',
                    paddingRight: '15px',
                    paddingLeft: '15px'
            }}>
              <div className="Detail__column Detail__column_img" style={{
                  position: 'relative',
                  width: '50%',
                  maxWidth: '500px',
                  boxSizing: 'border-box',
                  paddingRight: '30px',
                  paddingLeft: '30px'
              }}>
                    <img src={Poster === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : Poster} alt={Title} className="Detail__poster Detail__poster_blured" style={{
                        width: '100%',
                        top: 0,
                        left: 0,
                        borderRadius: '15px',
                        boxShadow: `0 0 0 1px rgba(0,0,0,0.05)`,
                        position: 'absolute',
                        zIndex: 1,
                        opacity: .8
                    }} />
                    <img src={Poster === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png' : Poster} alt={Title} className="Detail__poster" style={{
                        position: 'relative',
                        width: '100%',
                        top: 0,
                        left: 0,
                        borderRadius: '15px',
                        filter: `blur(20px)`,
                        transform: `scale(0.9) translateY(-20px)`
                    }}/>
                </div>
                <div className="Detail__column Detail__description" style={{marginTop: '130px'}}>
                    <h2 className="Detail__title title">{Title}</h2>
                    <div className="tags">
                        <p className="tag is-rounded">{Released}</p>
                        <p className="tag is-rounded">{Country}</p>
                        <p className="tag is-rounded">{Type}</p>
                    </div>
                    <p>
                        <strong>IMDB Rating:</strong> <span className="tag is-warning"><i className="fas fa-star Detail__star"></i> {imdbRating}</span>
                    </p>
                    <p>
                        <strong>Actors:</strong>
                        <br />
                        {Actors}
                    </p>
                    <div className="Detail__footer" style={{marginTop: '30px'}}>
                        <ButtonBackToHome />
                    </div>
                </div>
            </div>
          </div>
        )
    }
}