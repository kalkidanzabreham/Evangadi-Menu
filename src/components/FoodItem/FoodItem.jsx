import { Component } from 'react'

 class FoodItem extends Component {
  render() {
    
    let {Img,foodName,price,foodDesc} = this.props
    return (

      <div className="single-food">
        <div className="img">
          <img src={Img} />
        </div>
        <div className="title-price">
    
          <h3>{foodName}</h3>
          
          <p>{`$${price}`}</p>
        </div>
        <div className="food-desc">
          {foodDesc}
        </div>
      </div>
    );
  }
}
export default FoodItem
