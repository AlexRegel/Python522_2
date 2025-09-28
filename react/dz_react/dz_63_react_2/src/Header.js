import logo from './logo.svg';
import './Nav.css';

function Header(props) {
    let { title, slogan } = props;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* удалён 'style={{margin: 0}}' из 'h4' и 'p'. */}
                <h4>{title}</h4>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>{slogan}</p>
            </header>
        </div>
    );
}

export default Header;
