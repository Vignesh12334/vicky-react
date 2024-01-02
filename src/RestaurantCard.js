import resObj from "./components/resObj";

const RestaurantCard = (props) => {
    const{resData} = props;
    
    return <div className='res-card'>
    <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi'  />
       <h3>{resObj.name} </h3>
       <h4>{resObj.cuisines} </h4>
       <h4>{resObj.avgRating} stars </h4>
       <h4>{resObj.costForTwo /100} </h4>
       <h4>{resObj.deliveryTime} </h4>
       
    </div>
  }

  export default RestaurantCard;