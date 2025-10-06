import React from "react";
import './Search.css';

class Search extends React.Component {
    state = {
        search: ""
    }

    // При поиске, например 'command', быстрее всего откликается, 
    // при поиске "one" - гораздо дольше, 'appe' - нашёл всего 2 фильма :-)
    EnterTabPress = (event) => {
        // После ввода, поиск будет осуществляться при нажатии клавишы 'Enter' или 'Tab':
        if (event.key === 'Enter' || event.key === 'Tab') {
            this.props.search(this.state.search)
            // Предотвратим (на всякий случай) стандартное действие табуляции (переход к следующему элементу):
            event.preventDefault();
        }
    }

    render() {
        return (
            <>
                <div className="search">
                    <input
                        type="search"
                        placeholder="To search, press Enter or Tab."
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.EnterTabPress}
                    />
                </div>
            </>
        )
    }
}

export default Search;