import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export class Movie extends Component {
	static propTypes = {
		id: PropTypes.string,
		title: PropTypes.string,
		year: PropTypes.string,
		poster: PropTypes.string
	}

	render() {
		const { id, poster, title, year } = this.props

		return (
			<Link to={`/detail/${id}`} className="card">
				<div className="card-image" style={{ paddingLeft: '100px' }}>
					<figure className="image" style={{
						position: 'relative',
						width: '75%',
						boxSizing: 'border-box',
						padding: '10px',
						borderRadius: '15px'
					}}>
						<img
							alt={title}
							src={poster}
							style={{
								position: 'relative',
								zIndex: 2,
								width: '100%',
								top: 0,
								left: 0,
								borderRadius: '15px',
								boxShadow: `0 0 0 1px rgba(0,0,0,0.05)`
							}}
						/>
						<img
							alt={title}
							src={poster}
							style={{
								width: '100%',
								top: 0,
								left: 0,
								borderRadius: '15px',
								boxShadow: `0 0 0 1px rgba(0,0,0,0.05)`,
								position: 'absolute',
								zIndex: 1,
								opacity: .8,
								filter: `blur(15px)`,
								transform: `scale(0.9) translateY(20px)`
							}}
						/>
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content"  style={{textAlign: 'center'}}>
							<p className="title is-4">{title}</p>
							<p className="subtitle is-6">{year}</p>
						</div>
					</div>
				</div>
			</Link >
		)
	}
}