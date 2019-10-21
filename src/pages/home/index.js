import React, { Component } from 'react';

import { Title } from '../../components/title';
import { SearchForm } from '../../components/searchForm';
import { MoviesList } from '../../components/moviesList';

export class Home extends Component {
    state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults() {
    return this.state.results.length === 0
      ? <h6><span role="img" aria-label="sad-face"> 😞 </span>Sorry, results not found!</h6>
      : <MoviesList movies={this.state.results} />
  }

    render() {
        return (
            <div style={{paddingTop: "30vh"}}>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the form to search a movie</small>
                }
            </div>
        )
    }
}