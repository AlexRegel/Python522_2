import Header from './Header';
import './App.css';
// import './Article.css';
import Article from './Article';
import Footer from './Footer';
import Nav from './Nav';

let album = "Представляем Вашему вниманию альбомы";

function App(props) {
  let { title, slogan, navigation, db } = props;

  return (
    <div className="App">
      <Header title={title} slogan={slogan} />
      <Nav navigation={navigation} />
      <Article title={album} db={db} />
      <Footer />
    </div>
  );
}

export default App;
