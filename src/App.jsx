
import { Component } from 'react'
import './commonResource/style.css'

import FoodItem from './components/FoodItem/FoodItem.jsx'

import menu from './commonResource/data.js'
class App extends Component {

  render(){
  //  const foodItems = [];
  return (
    <div className="all-container">
      <header className="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
      <div className="foods-container">
       {menu.map(({id,title,price,img,desc}) =>{
        return (
          <FoodItem
            key={id}
            Img={img}
            foodName={title}
            price={price}
            foodDesc={
              desc.length > 300? desc.slice(0, 300) + "..." : desc
            }
           
          />
        );
       }
       )}


 

        {/* {

menu.forEach(({id, title, price, img, desc, category}) => {
  foodItems.push(
    <FoodItem 
      key={id} 
      Img={img} 
      foodName={title} 
      price={price} 
      foodDesc={desc} 
      Ctg={category} 
    />
  );
})}


  <>
    {foodItems}
  </> */}

     </div>
    </div>
    
  );
}
}
export default App
