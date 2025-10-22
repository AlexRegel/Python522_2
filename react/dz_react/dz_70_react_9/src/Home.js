import { useState, useEffect } from 'react';
import Items from './itemsFood/Items';
import data from './itemsFood/data.json';

function Home() {
  let date = new Date().getFullYear();  // год для Copyright

  const [highlightes, setHighlightes] = useState([]);  // список выделения
  const [foods, setFoods] = useState([]);  // работа с массивом продуктов

  useEffect(() => {
    // Использование данных из файла 'data.json'
    setFoods(data.food);  // console.log(data.food);    
  }, []);

  const onClickHighlightes = (id) => {
    if (highlightes.includes(id)) {
      setHighlightes(pr => pr.filter(fd => fd !== id));
    } else {
      setHighlightes(pr => [...pr, id]);
    }
  }

  return (
    <div>
      <h2>Home Page</h2>
      <div className="main">
        {/* {console.log(highlightes.length, highlightes)} */}
        <h3>Hhopping list</h3>
        <Items
          items={foods}
          highlightes={highlightes}
          onClickHighlightes={onClickHighlightes}
          count={highlightes.length}
        />
      </div>
      <footer><p>Copyright - {date} год</p></footer>
    </div>
  );
}

export default Home;