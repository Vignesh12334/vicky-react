 import RestaurantCard from "../RestaurantCard";
 import resObj from "./resObj";
 import { useState, useEffect} from "react";

 const Body = () => {

   const [listOfRes, SetLisOfRes] = useState([{
      id: '11',
      name:'kfc',
      cusine : 'burger',
      rating : 4
    
   }, {
      id : '12', 
      name : 'dominoes', 
      cusine: 'pizza',
      rating : 3.8 
   }, {
      id:'13', 
      name: 'thalapakati', 
      cusine : 'biryani', 
      rating : 4.9
   }]);

   const [searchText, setSearchText] = useState('')

    useEffect(()=> {
      fetchData()
    }, [])

    const fetchData =  async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/update")

      const json = await data.json()
      console.log(json)
     
    }

    

    return <div className='body'>
             <div className='filter'>
             <div className="search-box">
               <input type="text" className="searchBox" placeholder="search your favourite restaraunt" value={searchText} onChange={ (e) => {
                  setSearchText(e.target.value)
               }}></input>
               <button onClick={()=> {
                const filteredRes =  listOfRes.filter( (res) => res.data.name.toLowerCase().includes(searchText))
               }} >Search</button>
             </div>
               <button className="filter-btn" onClick={() => {
                  
                 const filteredList= listOfRes.filter( (res)=> {
                      return res.rating > 4.6
                  })
                  SetLisOfRes(filteredList)
               }} >Top Rated Restaurant</button>
             </div>
             <div className='res-container'>
                 

             {
                listOfRes.map( restaurant => {
                   return <RestaurantCard key={restaurant.id}  resData={resObj} />
                })
             }
             </div>
    </div>
  }

  export default Body;


