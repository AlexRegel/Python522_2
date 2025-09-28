import logo from './logo.svg';

function Header(props) {
  let { title, slogan } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{slogan}</p>
      </header>
    </div>
  )
}

export default Header;