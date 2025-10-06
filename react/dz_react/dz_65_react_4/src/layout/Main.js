import React from "react";
import './Main.css';
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component{
    state = {
        movies: []
    }

    componentDidMount(){
        fetch('https://www.omdbapi.com/?apikey=ad9aa169&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    
    searchMovie = (str) => {

        fetch(`https://www.omdbapi.com/?apikey=ad9aa169&s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))

    }

    render(){
        // console.log(this.state.movies);
        const {movies} = this.state;

        return(
            <div className="main">
                <div className="wrap">
                    <Search search={this.searchMovie} />
                    {
                        movies.length ? <MovieList movies={movies} /> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}

export default Main;