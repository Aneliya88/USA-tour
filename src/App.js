import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [cities, setCities] = useState (data);
  const [showText, setShowText] = useState(false);
  const removeCity = (id) => {
    let newCities = cities.filter (city => city.id !== id);
    setCities(newCities)
  }
  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
  }
  return (
    <div className="App">
      <div className='container'>
      <h1>USA TOUR <span>{cities.length}</span> cities</h1>
      </div>
      {cities.map((element => {
        const {id, city, description, image, showMore} = element;
         return ( 
          <div key={id}>
            <div className='container'>
              <h2><span>{id} </span>- {city}</h2>
            </div>
            <div className='container'>
              <p>{showMore ? description : description.substring(0, 220) + "..."}
              <button onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button></p>
              </div>
            <div className='container'>
              <img src={image} width="300px"/>
            </div>
            <div className='container'>
              <button className='btn' onClick={()=> removeCity(id)}>Remove</button>
            </div>
          </div>
         )
      }))}
      <div className='container'>
        <button className='btn' onClick={() => setCities([])}>Delete all</button>
      </div>
    </div>
  );
}
export default App;
