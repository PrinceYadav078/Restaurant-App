import React from 'react'
import "./style.css"
import Menu from "./menuApi"
const Restaurant = () => {
  return (
   <>
   <div className='card-container'>
    <div className='card'>
        <div className='card-body'>
            <span className='card-number card-circle subtle'>1</span>
            <span className='card-author subtle' >Breakfast</span>
            <h2 className='card-title'>Maggi</h2>
            <span className='card-description subtle'> 
            lorem ipsum dolor sit amet consecteur adfggygyf cfdrdr elit. dolore
            libreo cum obhd drdr jjhy drdrd ygtf tdrd. 
            </span>
            <div className='card-read'>Read</div>

        </div>
        <img src={Menu[0].image} alt='images' className='card-media'/>
        <span className='"card-tag subtle'>Order Now</span>
    </div>
   </div>
   </>
  )
}

export default Restaurant
