import React from "react";
import './Search.css';

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
        page: 1
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type, this.state.page)
        }
    }

    handelFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    prevPage = () => {
        // if(this.state.page === 1) {}
        this.setState(
            this.state.page > 1 ? { page: this.state.page - 1 } : { page: 1 },
            () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    nextPage = () => {
        this.setState(
            { page: this.state.page + 1 },
            () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    setPage = (num) => {
        this.setState(
            { page: num },
            () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    forward10 = () => {
        this.setState(
            { page: this.state.page + 10 },
            () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    // back 10 pages
    back10 = () => {
        this.setState(
            { page: this.state.page - 10 },
            () => { this.props.searchMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    render() {
        let limButPage = 10;  // Лимит количества кнопок на странице
        let normBut = 10;  // норма для страницы браузера (кол-ва кнопок)
        // общее количество страниц = окр.вверх(общее кол-во фильмов / Лимит количества кнопок)
        let allPages = Math.ceil(this.props.totalCount / limButPage); 
        // console.log("allPages", allPages);

        let lastIndex = allPages <= normBut ? allPages : this.state.page + limButPage;
        let firstIndex = allPages <= normBut ? lastIndex - limButPage + lastIndex - 1 : lastIndex - limButPage;
    
        // Рассчитываем индекс средней кнопки
        // const middleIndex = Math.floor((lastIndex - firstIndex) / 2) + firstIndex;

        let num = [];
        for (let i = 0; i <= allPages; i++) {
            num.push(i);
        }
        // console.log(num);
        // render() {
        //     let cardsOnSheet = 10;

        return (
            <>
                <div className="search">
                    <input
                        type="search"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn"
                        onClick={() => this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
                    >Search</button>
                </div>
                <div className="radio">
                    <input type="radio" name="type" data-type="all" checked={this.state.type === "all"} onChange={this.handelFilter} id="all" /> <label htmlFor="all">All</label>
                    <input type="radio" name="type" data-type="movie" checked={this.state.type === "movie"} onChange={this.handelFilter} id="movies" /> <label htmlFor="movies">Movies</label>
                    <input type="radio" name="type" data-type="series" checked={this.state.type === "series"} onChange={this.handelFilter} id="series" /> <label htmlFor="series">Series</label>
                    <input type="radio" name="type" data-type="game" checked={this.state.type === "game"} onChange={this.handelFilter} id="games" /> <label htmlFor="games">Games</label>
                </div>
                <div className="navigation">
                    <button className="btn" onClick={this.prevPage}>Prev</button>
                    {/* кнопка назад на 10 страниц */}
                    <button 
                        className="btn"
                        onClick={this.back10}
                        // применение локальных стилей с условием наличия заданного кол-ва страниц
                        style={{ display: allPages > 20 && this.state.page > 10 ? 'block' : 'none' }}
                    >back 10 pages</button>

                    <div className="items">
                        { //firstIndex                            
                            num.slice(firstIndex, lastIndex + 1).map((el, index) => (
                                <button
                                    className="btn" // для стилизации
                                    key={index}  // уникальный ключ
                                    // применение локальных стилей
                                    style={{ background: this.state.page !== el ? "" : "green" }}
                                    onClick={() => this.setPage(el)}
                                >{el}</button>
                            ))
                        }
                    </div>
                    {/* кнопка вперёд на 10 страниц */}
                    <button
                        className="btn"
                        onClick={this.forward10}
                        style={{ display: allPages > 20 ? 'block' : 'none' }}
                    >forward 10 page</button>

                    <button className="btn" onClick={this.nextPage}>Next</button>
                </div>
            </>
        )
    }
}

export default Search;