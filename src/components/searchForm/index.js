import React, { Component } from 'react'

const API_KEY = '20cb1df1'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = "0" } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }

    render() {
        return (
            <form className="form" onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control has-icons-left has-icons-right ">
                        <input
                            className="input is-large"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movie to see.." />
                        <span className="icon is-small is-left">
                            <img alt="magnifying-glass" src="https://img.icons8.com/plasticine/100/000000/google-web-search.png"/>
                        </span>
                    </div>
                    <div className="control">
                        <button className="button is-info is-large">
                            Search
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}