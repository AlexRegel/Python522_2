// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Article from './Article';
import Footer from './Footer.js';

function App(props) {
  // let title = "My site";
  // let slogan = "I am learning React"
  let { title, slogan, navigation, db, icon, copy } = props;
  return (
    <div className="App">
      <Header title={title} slogan={slogan} />
      <Nav navigation={navigation} />
      <Article db={db} icon={icon} />
      <Footer text={copy} />
    </div>
  );
}

export default App;
